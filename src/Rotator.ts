import { SpCRUD, SPitemRequest } from "./spDataAccess/SpCRUD";
import { DataAccess } from "./spDataAccess/DataAccess";
//import { DataLoaderRequest } from "./combinedDataLoader";
import { RotatorItem } from "./Models/RotatorModel";

class Rotator {
    public static Load() {
        var rotatorItems = Rotator.LoadData();

        Rotator.CreateRotatorStories(rotatorItems);
        Rotator.StartRotate();
    }

    public static ItemFactory(itm: SP.ListItem) {

    }

    public static CreateRotatorStories(rotatorItems: Array<RotatorItem>) {
        var webpart = document.getElementById("greifRotator_webpart");

        var mainImageContainer = document.createElement("div");
        mainImageContainer.className = "greifRotator_newsprimarycontainer";
        var mainImage = document.createElement("img");
        mainImage.id = "greifRotator_mainimage";
        mainImage.src = rotatorItems[0].image;
        var titleContainer = document.createElement("div");
        titleContainer.className = "content";
        var title = document.createElement("h2");
        title.id = "mainStoryTitle";
        title.style.margin = "0";
        title.innerText = rotatorItems[0].name;
        var description = document.createElement("p");
        description.id = "mainStoryDescription";
        description.innerText = rotatorItems[0].description;
        titleContainer.appendChild(title);
        titleContainer.appendChild(description);
        mainImageContainer.appendChild(mainImage);
        mainImageContainer.appendChild(titleContainer);
        webpart.appendChild(mainImageContainer);

        var rotatorStories = document.createElement("div");
        rotatorStories.style.display = "none"; 
        rotatorStories.className = "greifRotator_newssecondarycontainer";
        var activeStory = true;
        rotatorItems.forEach(item => {
            var row = Rotator.CreateStory(item, activeStory);
            rotatorStories.appendChild(row);
            activeStory = false;
        });
        webpart.appendChild(rotatorStories);
    }

    private static CreateStory(item: RotatorItem, active: Boolean) {
        var row = document.createElement("div");
        row.className = "row";
        row.addEventListener('click',(e:MouseEvent)=>{
            let elem = e.srcElement as HTMLElement;
            Rotator.ActiveElement(elem);
        });
        var innerRowContainer = document.createElement("div");
        innerRowContainer.className = active ? "greifRotator_newssecondary col-xs-12 active" : "greifRotator_newssecondary col-xs-12";
        innerRowContainer.id = item.name;
        var innerRow = document.createElement("div");
        innerRow.className = "row";
        var imageContainer = document.createElement("div");
        imageContainer.className = "col-xs-3";
        var image = document.createElement("img");
        image.src = item.image;
        imageContainer.appendChild(image);
        var titleContainer = document.createElement("div");
        titleContainer.className = "col-xs-9";
        var title = document.createElement("h2");
        title.innerText = item.name;
        var description = document.createElement("p");
        description.innerText = item.description;
        titleContainer.appendChild(title);
        titleContainer.appendChild(description);
        innerRow.appendChild(imageContainer);
        innerRow.appendChild(titleContainer);
        innerRowContainer.appendChild(innerRow);
        row.appendChild(innerRowContainer);
        return row;
    }

    private static LoadData() {
        var data: Array<RotatorItem> = [];

        data.push({
            name: "Lorem Ipsum 1",
            image: "/sites/greif/_catalogs/masterpage/GreifCustom/img/01.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl."
        });

        data.push({
            name: "Lorem Ipsum 2",
            image: "/sites/greif/_catalogs/masterpage/GreifCustom/img/04.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl."
        });

        data.push({
            name: "Lorem Ipsum 3",
            image: "/sites/greif/_catalogs/masterpage/GreifCustom/img/06.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl."
        });

        data.push({
            name: "Lorem Ipsum 4",
            image: "/sites/greif/_catalogs/masterpage/GreifCustom/img/mountain.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl."
        });

        return data;
    }

    public static StartRotate() {
        setTimeout(Rotator.Rotate, 5000);
    }

    public static Rotate() {
        var WP = document.getElementById("greifRotator_webpart");
        var Rows: NodeList = WP.querySelector(".greifRotator_newssecondarycontainer").children;

        // TODO: need to add an event listener for a mouse hover for an if statement
        var indexOfActive: number = 0;
        for (var i = 0; i < Rows.length; i++) {
            var Item = Rows[i] as HTMLElement;
            if (Item.querySelector(".active")) indexOfActive = i;
        }

        var nextOne = indexOfActive + 1;
        if (nextOne > (Rows.length - 1)) {
            nextOne = 0;
        }

        Rotator.ActiveElement(Rows[nextOne] as HTMLElement);
        // TODO: end if statement
        Rotator.StartRotate();
    }

    private static ActiveElement(item: HTMLElement) {
        var oldActiveItem = document.getElementsByClassName("active")[0];
        oldActiveItem.classList.remove("active");
        item.children[0].classList.add("active");
        var mainImage = document.getElementById("greifRotator_mainimage") as HTMLImageElement;
        mainImage.src = item.querySelector("img").src;
        var titleText = document.getElementById("mainStoryTitle") as HTMLHeadElement;
        titleText.innerText = item.querySelector("h2").innerText;
        var descriptionText = document.getElementById("mainStoryDescription") as HTMLParagraphElement;
        descriptionText.innerText = item.querySelector("p").innerText;
    }
}

// ExecuteOrDelayUntilScriptLoaded(Rotator.Load, "sp.jSs");
SP.SOD.executeFunc('sp.js', 'SP.ClientContext', Rotator.Load);
// (()=>{
//     var DLRequest:DataLoaderRequest = new DataLoaderRequest();
//     DLRequest.LoadFunction = Rotator.Load;
//     DLRequest.ItemFactory = Rotator.ItemFactory;
//     DLRequest.Context = "/";
//     DLRequest.List = "TestList";
//     DLRequest.CamlQuery = "<View><Query><Where></Where></Query></View>";
//     DLRequest.includedFields = ["Title","ID","ChoiceField"];
//     Rotator.Load,Rotator.ItemFactory,SPitemRequest
//     LoadObject.push();
// })()