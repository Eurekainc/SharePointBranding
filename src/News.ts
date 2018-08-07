import { SpCRUD, SPitemRequest } from "./spDataAccess/SpCRUD";
import { DataAccess } from "./spDataAccess/DataAccess";
import { NewsItm } from "./Models/NewsModel";

class News {
    public static async Load() {
        var newsItems:Array<NewsItm> = [];
        
        newsItems.push({
            url:"#", 
            name:"Cras hendrerit fermentum sodales. Sed eleifend efficitur lobortis.",
            image:"https://www.greif.com/uploads/media/category_images/0001/03/thumb_2393_category_images_big.png" 
        });

        newsItems.push({
            url:"#", 
            name:"Cras hendrerit fermentum sodales. Sed eleifend efficitur lobortis.",
            image:"https://www.greif.com/uploads/media/category_images/0001/02/thumb_1314_category_images_big.png" 
        });

        newsItems.push({
            url:"#", 
            name:"Cras hendrerit fermentum sodales. Sed eleifend efficitur lobortis.",
            image:"https://www.greif.com/uploads/media/category_images/0001/03/thumb_2255_category_images_big.png" 
        });

        News.CreateNewsItm(newsItems);
    }

    public static CreateNewsItm(newItems:Array<NewsItm>){
        var webpart = document.getElementById("greifNews_newszone"); 

        var newsTitleHeader = document.createElement("div");
        newsTitleHeader.className = "greifNews_zonetitle";
        var title = document.createElement("h2");
        title.innerText = "News";
        newsTitleHeader.appendChild(title);

        webpart.appendChild(newsTitleHeader);

        var newsContent = document.createElement("div");
        newsContent.className = "greifNews_zoneContent";

        newItems.forEach(newItem => {
            var row = document.createElement("div");
            row.className = "row";

            var rowContent = document.createElement("div");
            rowContent.className = "col-xs-12";

            var iconDiv = document.createElement("div");
            iconDiv.className = "greifNews_newsicon";
            iconDiv.style.backgroundImage = "url('" + newItem.image + "')";
            rowContent.appendChild(iconDiv);

            var newsItemTitle = document.createElement("h5");
            
            var newsItemLink = document.createElement("a");
            newsItemLink.href = newItem.url;
            newsItemLink.innerText = newItem.name;
            
            newsItemTitle.appendChild(newsItemLink);
            rowContent.appendChild(newsItemTitle);
            row.appendChild(rowContent);

            newsContent.appendChild(row);
        });

        webpart.appendChild(newsContent);
    }

}

ExecuteOrDelayUntilScriptLoaded(News.Load, "sp.js");