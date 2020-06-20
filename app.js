//jshint esversion: 6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.get("/", function(req,res){
   res.send("waheguru");
})

app.listen(3000, function(req,res){
    console.log("Server started at port 3000");
})