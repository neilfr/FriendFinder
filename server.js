var express = require("express");
var app = express();

//var PORT = 3000;
var PORT = process.env.PORT || 3000;

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