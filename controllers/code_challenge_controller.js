var express = require("express");

var router = express.Router();

var burger = require("../models/code_challenge.js");

// Creating routes
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    console.log(data);
    var hbsObject = {
      code_challenge: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/code_challenge", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect("/");
  });
      console.log(req.body);
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect("/");
  });
});


module.exports = router;
