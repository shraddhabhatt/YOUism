// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

var passport = require('passport');

// Sets up the Express App
// =============================================================

var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static directory
app.use(express.static("public"));

_dirname = path.resolve();
app.use(express.static(_dirname + '/public'));

// var sessionStore = new FileStore();

app.post("/signin", function(req, res) {
  console.log("inside serverside signin route");
  res.json({ "url" : "/Home" });
});
// =============================================================

// Syncing our sequelize models and then starting our Express app
// =============================================================

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});