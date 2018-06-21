var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// router.get("/", function(req, res){
//   res.render("test.html");
// })

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(req.body.name, function(result) {
    console.log(result)
    res.redirect("/");
  });
});

//getting ID from index input
router.put("/burgers/eat", function(req, res) {
  burger.eat(req.body.burger_id, function(result){
    console.log(result);
    res.redirect("/");
  });
});


//getting ID from index input
router.put("/burgers/update", function(req, res) {
  burger.update(req.body.burger_id, function(result){
    console.log(result);
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;