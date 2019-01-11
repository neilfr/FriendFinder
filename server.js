var express = require("express");
var app = express();


var PORT = 3000;

var myStuff = require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function(){
    console.log("App is listening on PORT " +PORT);
});

