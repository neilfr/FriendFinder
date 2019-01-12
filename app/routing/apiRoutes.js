var path = require('path');
var express = require("express");

//how do i receive q1 and q2 as an array??
var customers =[
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
        customers.push(req.body);
        for(var i=0;i<customers.length;i++){
            console.log("customer["+i+"] is:");
            console.log(customers[i]);
        }
        return true;
    });

}