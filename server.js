var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
// Import routes 
var router = require("./controllers/burgers_controller.js");
// Set Handlebars.
var exphbs = require('express-handlebars');
var PORT = process.env.PORT || 3000; 


// Serve static public
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", router);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});