import { SpCRUD, SPitemRequest } from "./spDataAccess/SpCRUD";
import { DataAccess } from "./spDataAccess/DataAccess";
import { ChampionPerson } from "./Models/ChampionsModel";

class Champion {
    public static async Load() {
        var champion = new ChampionPerson;

        champion.name = "Jane Doe";
        champion.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor porta elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos";
        champion.image = "http://placehold.it/80x100";

        Champion.CreateChampion(champion);
    }

    public static CreateChampion(champion:ChampionPerson){
        var webPart = document.getElementById("greifChampions_webpart");

        var titleHeader = document.createElement("div");
        titleHeader.className = "greifChampions_zonetitle";
        var title = document.createElement("h2");
        title.innerText = "Champions";
        titleHeader.appendChild(title);
        webPart.appendChild(titleHeader);

        var championContent = document.createElement("div");
        championContent.className = "greifChampions_zonecontent";
        
        var row = document.createElement("div");
        row.className = "row";
        var championInformation = document.createElement("div");
        championInformation.className = "col-xs-9";
        var name = document.createElement("h4");
        name.innerText = champion.name;
        var championDescription = document.createElement("p");
        championDescription.innerText = champion.description;

        championInformation.appendChild(name);
        championInformation.appendChild(championDescription);
        row.appendChild(championInformation);

        var imageContainer = document.createElement("div");
        imageContainer.className = "col-xs-3";
        var image = document.createElement("img");
        image.className = "greifChampions_image";
        image.src = champion.image;

        imageContainer.appendChild(image);
        row.appendChild(imageContainer);
        championContent.appendChild(row);
        
        webPart.appendChild(championContent);
    }

}

ExecuteOrDelayUntilScriptLoaded(Champion.Load, "sp.js");