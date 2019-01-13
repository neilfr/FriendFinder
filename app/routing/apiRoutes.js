var path = require('path');
var express = require("express");
var fs = require('fs');
var appPath = path.join(__dirname, '..');

var friends = [];

fs.readFile(path.join(appPath, '/data','friends.js'), "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    } 
    
    if(data){
        friends = JSON.parse(data);
    }
    // We will then re-display the content as an array for later use.
    console.log("resulting array from file");
    console.log(friends);
  });

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