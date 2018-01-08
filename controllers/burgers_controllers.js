var express = require('express');
var router = express.Router();
var burger = require('../models/app.js');

router.get("/", function(req, res) {
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
    console.log(hbsObject);
    res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
    	"burger_name"
    	], [
    	req.body.burger_name
    	], function(result) {
    		res.status(200).end();
    	});
});

router.put("/api/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);
    console.log(req.body);
	burger.updateOne({
		devoured: req.body.devoured
		}, condition, function(result) {
            res.status(200).end();
        });
});
module.exports = router;