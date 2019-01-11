var path = require('path');
var appPath = path.join(__dirname, '..');
module.exports = function(app){
    app.get("/", function(req,res){
        //res.send("Welcome to Friend Finder!");
        console.log("Home!");
        res.sendFile(path.join(appPath, '/public','home.html'));
    });
    app.get("/css/reset.css",function(req,res){
        console.log("Reset!");
        res.sendFile(path.join(appPath,'/public/css','reset.css'));
    });
    app.get("/css/style.css",function(req,res){
        console.log("CSS!");
        res.sendFile(path.join(appPath,'/public/css','style.css'));
    });
    
}

