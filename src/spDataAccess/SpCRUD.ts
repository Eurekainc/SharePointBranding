import { resolve } from "path";
import { request } from "http";
import { MetaTerm } from "./Models";

class SPItem {
    Context: SP.ClientContext;
    web: SP.Web;
    SPList: string;
}
export class SPitemRequest extends SPItem {
    ResponseFactory: SPListItemFactory;
    CamlQuery: string;
}
export class SpFieldAndValue {
    FieldName: string;
    Value: string;
}
export class SPNewItemRequest extends SPItem {
    CreateInfo: SP.ListItemCreationInformation;
    FieldsToUpdate: SpFieldAndValue[];
    constructor(isFolder: boolean) {
        super();
        this.CreateInfo = new SP.ListItemCreationInformation
        this.FieldsToUpdate = [];
        if (isFolder) {
            this.CreateInfo.set_underlyingObjectType(SP.FileSystemObjectType.folder)
        }
    }
    SPNewItemRequest() {

    }
}
export class SPDeleteItemRequest extends SPItem {
    ItemId: number;
    Recycle: boolean;
    /**
     *
     */
    constructor() {
        super();
        this.Recycle = true;
    }
}
//Top level interface to be inerited by any class wanting to be a factory for list item results 
export interface SPListItemFactory {
    (Item: SP.ListItem): any
}
export class SpCRUD {
    public static async GetItems(Request: SPitemRequest): Promise<Array<any>> {
        return new Promise<Array<any>>(resolve => {
            if (Request.web === undefined) {
                Request.web = Request.Context.get_web();
            }
            debugger;
            //let Return = Request.Response()
            let list = Request.web.get_lists().getByTitle(Request.SPList);
            let query = new SP.CamlQuery();
            query.set_viewXml(Request.CamlQuery);
            var ListItems = list.getItems(query);
            Request.Context.load(ListItems);
            Request.Context.executeQueryAsync(function () {
                var ReturnResults = [];
                var ListEnum = ListItems.getEnumerator();
                while (ListEnum.moveNext()) {
                    var itm = ListEnum.get_current();
                    ReturnResults.push(Request.ResponseFactory(itm));
                }
                resolve(ReturnResults);
            }, function (sender,args) {
                debugger;
            })
        })
    }
    public static async AddItem(Request: SPNewItemRequest): Promise<SP.ListItem> {
        return new Promise<SP.ListItem>(resolve => {
            if (Request.web === undefined) {
                Request.web = Request.Context.get_web();
            }
            let list = Request.web.get_lists().getByTitle(Request.SPList);
            let NewItem = list.addItem(Request.CreateInfo)
            Request.FieldsToUpdate.forEach(Field => {
                NewItem.set_item(Field.FieldName, Field.Value);
            });
            NewItem.update()
            Request.Context.load(NewItem);
            Request.Context.executeQueryAsync(function () {
                resolve(NewItem);
            }, function () {
                //TODO -- add some error handler
            });
        });
    }
    public static async DeleteItem(Request: SPDeleteItemRequest): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            if (Request.web === undefined) {
                Request.web = Request.Context.get_web();
            }
            let list = Request.web.get_lists().getByTitle(Request.SPList);
            var item = list.getItemById(Request.ItemId);
            Request.Recycle ? item.recycle() : item.deleteObject();
            //Request.Context.load(NewItem);
            Request.Context.executeQueryAsync(function () {
                resolve(true);
            }, function () {
                //TODO -- add some error handler
            });
        })
    }
    public static async GetMetadataTermsFromSet(Request: SPitemRequest): Promise<any> {
        var g_TermStoreGroupName = 'Site Collection - hmbnet.sharepoint.com-sites-Wiki';
        var g_TermStoreTermSetName = 'TocCategories';
        return new Promise<any>(resolve => {
            var session = SP.Taxonomy.TaxonomySession.getTaxonomySession(Request.Context);
            var TermStore = session.getDefaultSiteCollectionTermStore();
            var l_TermStoreGroup = TermStore.get_groups().getByName(g_TermStoreGroupName);
            var l_TermSet = l_TermStoreGroup.get_termSets().getByName(g_TermStoreTermSetName);
            var g_AllTerms = l_TermSet.getAllTerms();
            Request.Context.load(l_TermSet);
            Request.Context.load(g_AllTerms, 'Include(IsRoot, Labels, TermsCount, CustomSortOrder, Id, Name, PathOfTerm, Parent, LocalCustomProperties)');
            Request.Context.executeQueryAsync(() => {
                var newthing = l_TermSet;
                let TermEnum = g_AllTerms.getEnumerator();
                var ReturnArray = {};
                while(TermEnum.moveNext()){
                    let Term:MetaTerm = new MetaTerm();
                    let TermItm:SP.Taxonomy.Term = TermEnum.get_current();
                    Term.Parent = TermItm.get_isRoot() ? "Root":TermItm.get_parent().get_name() ;
                    Term.Name = TermItm.get_name();
                    let TermGuid = TermItm.get_id();
                    let TermGuidString = TermGuid.toString();
                    ReturnArray[TermGuidString] = Term;
                }
                resolve(ReturnArray);
            }, (sender, args) => {
                debugger;
            });
        })
    }
}




