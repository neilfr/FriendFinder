var path = require('path');
var express = require("express");
var customer;


module.exports = function(app){
    // Sets up the Express app to handle data parsing
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.post("/somethingelse", function(req,res){
        console.log("POST!");
        customer=req.body;
        console.log("the customer is:");
        console.log(customer);
    });
}