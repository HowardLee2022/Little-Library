// // *****************************************************************************
// // Server.js - This file is the initial starting point for the Node/Express server.
// //
// // ******************************************************************************
// // *** Dependencies
// // =============================================================
var express = require("express");
// var path = require("path")

// var session = require("express-session");
// // Requiring passport as we've configured it
// var passport = require("./config/passport");

// // Compress
// var compression = require('compression')
const sequelize = require("./config/connection");

// // Sets up the Express App
// // =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// // compress all responses
// app.use(compression())

// // Requiring our models for syncing
const { user,book,library,categories}=require('./models');

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({
//   defaultLayout: "main",
//   //layoutsDir: path.join(__dirname, 'views')
// }));
// app.set("view engine", "handlebars");

// // Static directory
// app.use(express.static("public"));

// // We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// // Routes
// // =============================================================
app.get("/", (req, res) => {
  res.send("Server Test Little Library");
});


// // Syncing our sequelize models and then starting our Express app
// // =============================================================
sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT" + PORT);
  });
});
