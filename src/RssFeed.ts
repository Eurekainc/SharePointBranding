import { SpCRUD, SPitemRequest } from "./spDataAccess/SpCRUD";
import { DataAccess } from "./spDataAccess/DataAccess";
import { RssFeedItem } from "./Models/RssFeedModel";

class RssFeed {
    public static async Load() {
        var rssItems:Array<RssFeedItem> = [];
        
        rssItems.push({
            url:"#", 
            name:"Cras hendrerit fermentum sodales. Sed eleifend efficitur lobortis.",
            description:"this is just a description to mock the look of the rss feed that will be occurring here." 
        });

        rssItems.push({
            url:"#", 
            name:"Cras hendrerit fermentum sodales. Sed eleifend efficitur lobortis.",
            description:"this is just a description to mock the look of the rss feed that will be occurring here." 
        });

        rssItems.push({
            url:"#", 
            name:"Cras hendrerit fermentum sodales. Sed eleifend efficitur lobortis.",
            description:"this is just a description to mock the look of the rss feed that will be occurring here." 
        });

        RssFeed.CreateNewsItm(rssItems);
    }

    public static CreateNewsItm(rssItems:Array<RssFeedItem>){
        var webpart = document.getElementById("greifRssFeed_newszone"); 

        var rssFeedTitleHeader = document.createElement("div");
        rssFeedTitleHeader.className = "greifRssFeed_zonetitle";
        var title = document.createElement("h2");
        title.innerText = "RSS Feed";
        rssFeedTitleHeader.appendChild(title);

        webpart.appendChild(rssFeedTitleHeader);

        var rssFeedContent = document.createElement("div");
        rssFeedContent.className = "greifRssFeed_zoneContent";

        rssItems.forEach(rssItem => {
            var row = document.createElement("div");
            row.className = "row";

            var rowContent = document.createElement("div");
            rowContent.className = "col-xs-12";

            var rssFeedItem = document.createElement("h4");
            var description = document.createElement("p");
            description.innerText = rssItem.description;
            
            var newsItemLink = document.createElement("a");
            newsItemLink.href = rssItem.url;
            newsItemLink.innerText = rssItem.name;
            
            rssFeedItem.appendChild(newsItemLink);
            rowContent.appendChild(rssFeedItem);
            rowContent.appendChild(description);
            row.appendChild(rowContent);

            rssFeedContent.appendChild(row);
        });

        webpart.appendChild(rssFeedContent);
    }

}

ExecuteOrDelayUntilScriptLoaded(RssFeed.Load, "sp.js");