import { WikiPageItem } from "./Models"
import { SPNewItemRequest, SpFieldAndValue } from "./SpCRUD";
export class Factories {
    public static WikiPageFactory(SPlistItem) {
        var Item: WikiPageItem = new WikiPageItem;
        Item.Id = SPlistItem.get_item("ID")
        Item.Title = SPlistItem.get_item("Title") || "";
        Item.Url = SPlistItem.get_item("FileRef") || "";
        let PageCat =  SPlistItem.get_item("PageCategory");
        Item.MainCategory = PageCat ? PageCat.get_termGuid() : "";
        Item.Categories = [];
        let TermEnum = SPlistItem.get_item("Wiki_x0020_Page_x0020_Categories").getEnumerator();
        while(TermEnum.moveNext()){
            let TItm = TermEnum.get_current();
            Item.Categories.push(TItm.get_label());
        }
        return Item;
    }
   
}

//Wiki_x0020_Page_x0020_Categories
//FileRef
//Title