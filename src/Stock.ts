import { SpCRUD, SPitemRequest } from "./spDataAccess/SpCRUD";
import { DataAccess } from "./spDataAccess/DataAccess";
import { StockModel } from "./Models/StockModel";

class Stock {
    public static async Load() {
        var stocks = Stock.LoadStocks();

        Stock.CreateStockDiv(stocks);
    }

    public static CreateStockDiv(stocks:Array<StockModel>){
        var header = document.getElementById("stockTicker");

        var containerdiv = document.createElement("div");
        var stockSpan = document.createElement("span");
        stockSpan.style.textAlign = "end";
        stockSpan.style.position = "static";
        stockSpan.className = "col-xs-12";
        stockSpan.id = "vision";
        var stockSpanHTML = "";
        stocks.forEach(stock => {
            stockSpanHTML += "<b>" + stock.name + " " + stock.points
                + "</b> " + stock.difference + " ";
        });
        stockSpan.innerHTML = stockSpanHTML;
        containerdiv.appendChild(stockSpan);

        header.appendChild(containerdiv);
    }

    public static LoadStocks(){
        var stocks: Array<StockModel> = [];

        stocks.push({
            name: "GEF",
            points: "57.59",
            difference: "(-0.74 (1.27%))"
        });

        stocks.push({
            name: "^RUT",
            points: "1506.925",
            difference: "(-1.08 (0.072%))"
        });

        return stocks;
    }
}

ExecuteOrDelayUntilScriptLoaded(Stock.Load, "sp.js");