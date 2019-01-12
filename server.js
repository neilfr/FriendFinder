var express = require("express");
var app = express();


var PORT = 3000;

// need to ask why i need the (app) for this to work
//var htmlRoutes = require("./app/routing/htmlRoutes.js")(app);
var htmlRoutes = require("./app/routing/htmlRoutes.js");
htmlRoutes(app);
var apiRoutes = require("./app/routing/apiRoutes.js");
apiRoutes(app);

// Sets up the Express app to handle data parsing - why does this work???
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function(){
    console.log("App is listening on PORT " +PORT);
});

