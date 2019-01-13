var path = require('path');
var express = require("express");

var friends =[
    {
        "name":"me",
        "answers":["5","2"]
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
        return true;
    });

    app.get("/api/friends",function(req,res){
        return res.json(friends);
    });

}