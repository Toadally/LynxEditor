const http = require("http");
const ejs = require("ejs");
const fs = require("fs");
const port = "3000";
const path = require("path");
var express = require("express");
var app = express();



app.set("view engine", "ejs");

app.use("/public", express.static("public"));

app.get("/", function(req, res){
  console.log(__dirname);
  res.render("index");
});

app.listen(3000);
console.log("Listening on 3000");
