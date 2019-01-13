var path = require('path');
var express = require("express");
var fs = require('fs');
var appPath = path.join(__dirname, '..');




/*
fs.readFile('../data/friends.js',function(err,data){
    console.log("reading file data");
    console.log(data);
});
*/

var friends =[
    {
        "name":"Joe Average",
        "answers":["3","3","3","3","3"]
    },{
        "name":"Heidi High",
        "answers":["5","5","5","5","5"]
    },{
        "name":"Lois Low",
        "answers":["1","1","1","1","1"]
    }
];


module.exports = function(app){
    // Sets up the Express app to handle data parsing
    // When I move these lines to server.js... req.body becomes undefined... why??
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.post("/api/friends", function(req,res){
        console.log("POST!");
        friends.push(req.body);
        for(var i=0;i<friends.length;i++){
            console.log("friends["+i+"] is:");
            console.log(friends[i]);
        }
        fs.writeFile(path.join(appPath, '/data','friends.js'),JSON.stringify(friends), function(err){
            if (err) {
                return console.log(err);
            }
            console.log("wrote to file!");
        });
        return true;
    });

    app.get("/api/friends",function(req,res){
        return res.json(friends);
    });

}