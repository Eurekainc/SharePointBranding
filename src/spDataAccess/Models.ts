export class WikiPageItem {
    Id:number;
    Title: string;
    Url: string;
    MainCategory: string;
    Categories:Array<string>;
}
export class MetaTerm {
    Name: string;
    Parent: string;
    sites: WikiPageItem[];
}