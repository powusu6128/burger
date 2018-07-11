var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// routes

router.get("/", function (req, res) {
    res.redirect("/burger");
});

router.get("/burger", function (req, res) {
    burger.selectAll(function (data) {
        console.log(data);
        var hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// insert new burger
router.post('/burger/add', function (req, res) {
    burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, false], function () {
        res.redirect('/burger');
    });
});

// update a burger
router.put('/burger/update/:id', function (req, res) {
    var condition = " item_id = " + req.params.id;

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (data) {
        res.redirect('/burger');
    });
});

module.exports = router;