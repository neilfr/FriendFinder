var path = require('path');
var appPath = path.join(__dirname, '..');

module.exports = function(app){
    app.get("/", function(req,res){
        //res.send("Welcome to Friend Finder!");
        //console.log("Home!");
        res.sendFile(path.join(appPath, '/public','home.html'));
    });

    app.get("/css/:filename",function(req,res){
        //console.log("CSS!");
        var filename=req.params.filename;
        //console.log(filename);
        res.sendFile(path.join(appPath,'/public/css',filename));
    });

    app.get("/scripts/:filename",function(req,res){
        //console.log("JS!");
        var filename=req.params.filename;
        //console.log(filename);
        res.sendFile(path.join(appPath,'public/scripts',filename));
    })

    app.get("/survey",function(req,res){
        //console.log("Survey!");
        res.sendFile(path.join(appPath,'/public','survey.html'));
    });
}

