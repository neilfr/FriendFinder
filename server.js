var express = require("express");
var app = express();


var PORT = 3000;

// need to ask why i need the (app) for this to work
var htmlRoutes = require("./app/routing/htmlRoutes.js")(app);
var apiRoutes = require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function(){
    console.log("App is listening on PORT " +PORT);
});

