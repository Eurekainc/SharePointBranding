var gulp = require("gulp");
var spsave = require("spsave").spsave;
var watch = require("gulp-watch");

var creds = require("./creds.js");
var coreOptions = require("./coreOptions.js");

var paths = {
    styleLibrary: ["./Build/SiteAssets/**/*"],
    masterPage: ["./Build/MasterPage/**/*"]
};

var fileOptions = {
    styleLibrary: {
        folder: "SiteAssets", //folder inside SharePoint
        glob: paths.styleLibrary, //local folder
        base: "SiteAssets" //this remove the 'Style Library' from the url
    },
    masterPage: {
        folder: "_catalogs/masterpage/GreifCustom",
        glob: paths.masterPage,
        base: "MasterPage"
    }
};

var copyToSharePoint = function(fileOptions) {
    return spsave(coreOptions, creds, fileOptions);
};

gulp.task("default", ["watch"]);
gulp.task("deploy", ["styleLibrary", "Masterpage"]);
gulp.task("styleLibrary", function() {
    return copyToSharePoint(fileOptions.styleLibrary);
});
gulp.task("Masterpage", function() {
    return copyToSharePoint(fileOptions.masterPage);
});
gulp.task("watch", function() {
    watch(paths.styleLibrary).on("change", function(file) {
        var changedFileOptions = fileOptions.styleLibrary;
        changedFileOptions.glob = file;
        copyToSharePoint(changedFileOptions);
    });
    watch(paths.masterPage).on("change", function(file) {
        var changedFileOptions = fileOptions.masterPage;
        changedFileOptions.glob = file;
        copyToSharePoint(changedFileOptions);
    });
});
//   gulp.watch("App/search/Item_Display.js", function (event) {
//     gulp.src(event.path)
//         .pipe($.spsave({
//             siteUrl: settings.siteUrl,
//             folder: "_catalogs/masterpage/Display Templates/Search",
//             flatten: true,
//             filesMetaData: [{
//                 fileName: "Item_Display.js",
//                 metadata: {
//                     "__metadata": { type: "SP.Data.OData__x005f_catalogs_x002f_masterpageItem" },
//                     Title: "SPSave Display Template",
//                     DisplayTemplateLevel: "Item",
//                     TargetControlType: {
//                         "__metadata": {
//                             "type": "Collection(Edm.String)"
//                         },
//                         "results": [
//                             "SearchResults"
//                         ]
//                     },
//                     ManagedPropertyMapping: `'Title':'Title','Path':'Path','Description':'Description'`,
//                     ContentTypeId: "0x0101002039C03B61C64EC4A04F5361F38510660500A0383064C59087438E649B7323C95AF6",
//                     TemplateHidden: false
//                 }
//             }]
//         }, creds));
// });