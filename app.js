const http = require("http");
const ejs = require("ejs");
const fs = require("fs");
const port = "3000";
const path = require("path");
var express = require("express");
var app = express();


ot = require("ot");


app.set("view engine", "ejs");

app.use("/public", express.static("public"));

app.get("/", function(req, res){
  res.render("index");
});

app.use(function(req, res, next) {
  res.render("404");
});

app.listen(3000);
console.log("Listening on 3000");


var server = new ot.Server("lorem ipsum");
server.broadcast = function (operation) {
};

function onReceiveOperation (json) {
  var operation = ot.Operation.fromJSON(JSON.parse(json));
};
