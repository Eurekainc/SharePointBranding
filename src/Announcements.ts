import { SpCRUD, SPitemRequest } from "./spDataAccess/SpCRUD";
import { DataAccess } from "./spDataAccess/DataAccess";
import { AnnouncementItem } from "./Models/AnnouncementsModel";

class Announcements {
    public static async Load() {
        var announcements = Announcements.CreateData();

        Announcements.CreateAnnouncements(announcements);
    }

    public static CreateAnnouncements(announcements:Array<AnnouncementItem>){
        var webpart = document.getElementById("greifAnnouncements_announcezone");

        var announcementHeader = document.createElement("div");
        announcementHeader.className = "greifAnnouncements_zonetitle";
        var title = document.createElement("h2");
        title.innerText = "Announcements";
        announcementHeader.appendChild(title);
        webpart.appendChild(announcementHeader);

        var announcementContents = document.createElement("div");
        announcementContents.className = "greifAnnouncements_zonecontent";
        announcements.forEach(announcement => {
            var row = document.createElement("div");
            row.className = "row";
            var announcementTitleContainer = document.createElement("div");
            announcementTitleContainer.className = "col-xs-12";
            var announcementTitle = document.createElement("h5");
            var announcementTitleLink = document.createElement("a");
            announcementTitleLink.href = announcement.url;
            announcementTitleLink.innerText = announcement.title;
            announcementTitle.appendChild(announcementTitleLink);
            announcementTitleContainer.appendChild(announcementTitle);
            row.appendChild(announcementTitleContainer);
            var announcementTagContainer = document.createElement("div");
            announcementTagContainer.className = "col-xs-12";
            announcement.tags.forEach(tag => {
                var tagSpan = document.createElement("span");
                tagSpan.className = "label";
                tagSpan.style.backgroundColor = tag.color;
                tagSpan.innerText = tag.name;
                announcementTagContainer.appendChild(tagSpan);
            });
            row.appendChild(announcementTagContainer);
            announcementContents.appendChild(row);
        });

        webpart.appendChild(announcementContents);
    }

    public static CreateData() {
        var data: Array<AnnouncementItem> = [];

        data.push({
            url: "#",
            title: "Cras hendrerit fermentum sodales. Sed eleifend efficitur lobortis.",
            tags: [{
                name: "IT",
                color: "#337ab7"
            }, {
                name: "North America",
                color: "#f0ad4e"
            }]
        });

        data.push({
            url: "#",
            title: "Cras hendrerit fermentum sodales. Sed eleifend efficitur lobortis.",
            tags: [{
                name: "Finance",
                color: "#5cb85c"
            }]
        });

        data.push({
            url: "#",
            title: "Cras hendrerit fermentum sodales. Sed eleifend efficitur lobortis.",
            tags: [{
                name: "HR",
                color: "#d9534f"
            }, {
                name: "Europe",
                color: "#5bc0de"
            }]
        });

        return data;
    }
}

// ExecuteOrDelayUntilScriptLoaded(Announcements.Load, "sp.js");
SP.SOD.executeFunc('sp.js', 'SP.ClientContext', Announcements.Load);