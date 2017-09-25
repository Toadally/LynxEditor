const http = require("http");
const ejs = require("ejs");
const fs = require("fs");
const port = "3000";
const path = require("path");
var express = require("express");
var app = express();

app.locals.fs=require("fs");

ot = require("ot");


app.set("view engine", "ejs");

app.use("/public", express.static("public"));

app.get("/", function(req, res){
  var f;
  fs.readdir("./preview", (err, files) => {
    f = files;
    res.render("index", { files: f });
  });
});

app.use(function(req, res, next) {
  res.render("404");
});

app.use(function(error, req, res, next) {

  res.render('500.ejs', {
     status: 500,
     error: error
  });
});

app.listen(3000);
console.log("Listening on 3000");


var server = new ot.Server("lorem ipsum");
server.broadcast = function (operation) {
};

function onReceiveOperation (json) {
  var operation = ot.Operation.fromJSON(JSON.parse(json));
};
