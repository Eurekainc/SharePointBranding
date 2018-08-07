import { SpCRUD, SPitemRequest } from "./spDataAccess/SpCRUD";
import { DataAccess } from "./spDataAccess/DataAccess";
import { LinkItem } from "./Models/LinksModel";

class Links {
    public static async Load() {
        Links.CreateTabHeader();
        Links.CreateTabContent();
    }

    public static CreateTabHeader() {
        var webpart = document.getElementById("greifLinks_linkszone");
        var tabsClasses: Array<string> = ["nav", "nav-tabs", "nav-justified"];
        var tabs = document.createElement("ul");
        tabsClasses.forEach(tclass => {
            tabs.classList.add(tclass);
        });

        var activeListItem = document.createElement("li");
        activeListItem.classList.add("active");
        var quickLinkContainer = document.createElement("div");
        var quickLinkHeader = document.createElement("a");
        quickLinkHeader.setAttribute("data-toggle", "tab");        
        quickLinkHeader.href = "#quicklinks";
        quickLinkHeader.innerText = "Quick Links";
        quickLinkContainer.appendChild(quickLinkHeader);
        activeListItem.appendChild(quickLinkContainer);

        var listItem = document.createElement("li");
        var mylinksContainer = document.createElement("div");
        var mylinksHeader = document.createElement("a");
        mylinksHeader.setAttribute("data-toggle", "tab");
        mylinksHeader.href = "#mylinks";
        mylinksHeader.innerText = "My Links";
        mylinksContainer.appendChild(mylinksHeader);
        listItem.appendChild(mylinksContainer);
        
        tabs.appendChild(activeListItem);
        tabs.appendChild(listItem);
        webpart.appendChild(tabs);
    }

    public static CreateTabContent() {
        var webpart = document.getElementById("greifLinks_linkszone");
        var tabContent = document.createElement("div");
        tabContent.classList.add("tab-content");
        
        var quickLinksArray = Links.CreateQuickLinksData();
        var quickLinks = Links.CreateLinks(quickLinksArray, "quickLinks");

        var myLinksArray = Links.CreateMyLinksData();
        var myLinks = Links.CreateLinks(myLinksArray, "myLinks");

        tabContent.appendChild(quickLinks);
        tabContent.appendChild(myLinks);

        webpart.appendChild(tabContent);
    }

    public static CreateLinks(links:Array<LinkItem>, linkType:string){
        if (linkType == "quickLinks") {
            var quickLinksContainer = document.createElement("div");
            quickLinksContainer.id = "quicklinks";
            quickLinksContainer.classList.add("tab-pane", "fade", "in", "active");
            if (links.length > 9) {
                Links.GreaterThanNineLinks(links, quickLinksContainer, linkType);
            } else {
                Links.LessThanNineLinks(links, quickLinksContainer);
            }

            return quickLinksContainer;
        } else {
            var myLinksContainer = document.createElement("div");
            myLinksContainer.id = "mylinks";
            myLinksContainer.classList.add("tab-pane", "fade");
            if (links.length > 9) {
                Links.GreaterThanNineLinks(links, myLinksContainer, linkType);
            } else {
                Links.LessThanNineLinks(links, myLinksContainer);
            }
            return myLinksContainer;
        }
    }

    private static GreaterThanNineLinks(links:Array<LinkItem>, linksContainer:HTMLDivElement, linkType:string) {
        var leftNav = document.createElement("div");
        var rightNav = document.createElement("div");

        leftNav.classList.add("leftNav");
        leftNav.addEventListener("click", (linkType == "quickLinks" ? Links.quicklinksswapviews : Links.mylinksswapviews));
        var leftNavHeader = document.createElement("h1");
        leftNavHeader.classList.add("sideNav");
        leftNavHeader.innerText = "<";
        leftNav.appendChild(leftNavHeader);

        rightNav.classList.add("rightNav");
        rightNav.addEventListener("click", (linkType == "quickLinks" ? Links.quicklinksswapviews : Links.mylinksswapviews));
        var rightNavHeader = document.createElement("h1");
        rightNavHeader.classList.add("sideNav");
        rightNavHeader.innerText = ">";
        rightNav.appendChild(rightNavHeader);

        linksContainer.appendChild(leftNav);

        var columnRow = document.createElement("div");
        columnRow.classList.add("col-xs-10");
        var rowCounter = 0;

        for (var i = 0; i < links.length; i++) {
            if(i == 0 || i % 3 == 0) {
                var row = document.createElement("div");
                rowCounter++;
                (rowCounter <= 3) ? row.classList.add("row", "linkButtons", "pageone") : row.classList.add("row", "linkButtons", "pagetwo");
            }
            var content = Links.CreateLinkItem(links[i]);
            row.appendChild(content);

            columnRow.appendChild(row);
        }
        linksContainer.appendChild(columnRow);
        linksContainer.appendChild(rightNav);
    }

    private static LessThanNineLinks(links:Array<LinkItem>, linksContainer:HTMLDivElement) {
        for (var i = 0; i < links.length; i++) {
            if(i == 0 || i % 3 == 0) {
                var row = document.createElement("div");
                row.classList.add("row", "linkButtons");
            }
            var content = Links.CreateLinkItem(links[i]);
            row.appendChild(content);

            linksContainer.appendChild(row);
        }
    }

    private static CreateLinkItem(item:LinkItem){
        var linkItem = document.createElement("div");
        linkItem.classList.add("col-xs-4");
        var link = document.createElement("a");
        link.href = item.url;
        link.innerText = item.name;
        linkItem.appendChild(link);

        return linkItem;
    }

    public static CreateQuickLinksData(){
        var quicklinks: Array<LinkItem> = [];

        quicklinks.push({
            name:"Submit a Champion",
            url:"#"
        }, {
            name: "Career Opportunities",
            url: "#"
        }, {
            name: "Workday Upoint",
            url: "#"
        }, {
            name: "Is it Safe to Travel?",
            url: "#"
        }, {
            name: "Policies & Forms",
            url: "#"
        }, {
            name: "Skillport Learning Management System",
            url: "#"
        }, {
            name: "Book Travel",
            url: "#"
        }, {
            name: "Submit Expenses",
            url: "#"
        }, {
            name: "CART",
            url: "#"
        }, {
            name: "Lorem Ipsum",
            url: "#"
        }, {
            name: "Hello World",
            url: "#"
        }, {
            name: "Testing",
            url: "#"
        });

        return quicklinks;
    }

    public static CreateMyLinksData(){
        var mylinks: Array<LinkItem> = [];

        mylinks.push({
            name: "Google",
            url: "#"
        }, {
            name: "WTA Consulting",
            url: "#"
        }, {
            name: "Reddit",
            url: "#"
        });

        return mylinks;
    }

    public static quicklinksswapviews() {
        var firstSet = document.getElementsByClassName("pageone");
        var secondSet = document.getElementsByClassName("pagetwo");
        var quicklinks = document.getElementById("quicklinks").getElementsByClassName("linkButtons");

        if(quicklinks[0].classList.contains("hidden")) {
            for(var i = 0; i < firstSet.length; i++){
                firstSet[i].classList.remove("hidden");
            }
            
            for(var j = 0; j < secondSet.length; j++){
                secondSet[j].classList.add("hidden");
            }
        } else {
            for(var k = 0; k < firstSet.length; k++){
                firstSet[k].classList.add("hidden");
            }
            
            for(var l = 0; l < secondSet.length; l++){
                secondSet[l].classList.remove("hidden");
            }
        }
    }

    public static mylinksswapviews() {
        var firstSet = document.getElementsByClassName("pageone");
        var secondSet = document.getElementsByClassName("pagetwo");
        var quicklinks = document.getElementById("mylinks").getElementsByClassName("linkButtons");

        if(quicklinks[0].classList.contains("hidden")) {
            for(var i = 0; i < firstSet.length; i++){
                firstSet[i].classList.remove("hidden");
            }
            
            for(var j = 0; j < secondSet.length; j++){
                secondSet[j].classList.add("hidden");
            }
        } else {
            for(var k = 0; k < firstSet.length; k++){
                firstSet[k].classList.add("hidden");
            }
            
            for(var l = 0; l < secondSet.length; l++){
                secondSet[l].classList.remove("hidden");
            }
        }
    }
}

ExecuteOrDelayUntilScriptLoaded(Links.Load, "sp.js");