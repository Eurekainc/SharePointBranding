import { SpCRUD, SPitemRequest } from "./spDataAccess/SpCRUD";
import { DataAccess } from "./spDataAccess/DataAccess";
import { HighAchieverPerson } from "./Models/HighAchieversModel";

class HighAchievers {
    public static async Load() {
        var highAchiever = new HighAchieverPerson;
        
        highAchiever.name = "John Smith";
        highAchiever.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor porta elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos";
        highAchiever.image = "http://placehold.it/80x100";

        HighAchievers.CreatePerson(highAchiever);
    }

    public static CreatePerson(highAchiever:HighAchieverPerson){
        var webpart = document.getElementById("greifHighAchievers_webpart");
        
        var titleHeader = document.createElement("div");
        titleHeader.className = "greifHighAchievers_zonetitle";
        var title = document.createElement("h2");
        title.innerText = "High Achievers";
        titleHeader.appendChild(title);
        webpart.appendChild(titleHeader);
            
        var highAchieversContent = document.createElement("div");
        highAchieversContent.className = "greifHighAchievers_zonecontent";
        var row = document.createElement("div");
        row.className = "row";
        var highAchieverInformation = document.createElement("div");
        highAchieverInformation.className = "col-xs-9";
        var highAchieverName = document.createElement("h4");
        highAchieverName.innerText = highAchiever.name;
        highAchieverInformation.appendChild(highAchieverName);
        var highAchieverProfile = document.createElement("p");
        highAchieverProfile.innerText = highAchiever.description;    
        highAchieverInformation.appendChild(highAchieverProfile);
        var highAchieverSubmission = document.createElement("p");
        highAchieverSubmission.innerText = "Have you recently achieved a hard-fought goal or know someone who has? Let us know: ";
        var highAchieverSubmissionLink = document.createElement("a");
        highAchieverSubmissionLink.href = "#"; // NOTE THIS IS CURRENTLY HARD CODED
        highAchieverSubmissionLink.innerText = "Submit a High Achiever";
        highAchieverSubmission.appendChild(highAchieverSubmissionLink);
        highAchieverInformation.appendChild(highAchieverSubmission);
        row.appendChild(highAchieverInformation);
        var highAchieverImageContainer = document.createElement("div");
        highAchieverImageContainer.className = "col-xs-3";
        var highAchieverImage = document.createElement("img");
        highAchieverImage.src = highAchiever.image;
        highAchieverImage.className = "greifHighAchievers_image";
        highAchieverImageContainer.appendChild(highAchieverImage);
        row.appendChild(highAchieverImageContainer);
        highAchieversContent.appendChild(row);
        webpart.appendChild(highAchieversContent);
    }

}

ExecuteOrDelayUntilScriptLoaded(HighAchievers.Load, "sp.js");