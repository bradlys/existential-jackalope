var express = require('express');
var router = express.Router();
var fs = require('fs');

//Send JSON from file. Could use database later but YOLO
router.get('/', function(req, res, next) {
	var json = JSON.parse(fs.readFileSync('public/json/myjson.json'));
	res.json(json);
});

module.exports = router;
