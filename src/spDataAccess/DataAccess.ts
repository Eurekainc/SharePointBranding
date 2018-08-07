import { SpCRUD, SPitemRequest, SPDeleteItemRequest } from "./SpCRUD";
import { Factories } from "./ItemFactories";
import { WikiPageItem } from "./Models";
//import { ContactDom } from "./App";

export class DataAccess { 
    static readonly PageList = "Pages";

    public static async GetPages(Context:SP.ClientContext): Promise<Array<WikiPageItem>> {
        var Request = new SPitemRequest;
        Request.Context = Context;
        Request.SPList = DataAccess.PageList;
        Request.CamlQuery = "<View><Query><Where></Where></Query></View>"
        Request.ResponseFactory = Factories.WikiPageFactory;
        return SpCRUD.GetItems(Request);
    } 

}