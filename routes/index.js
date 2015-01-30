var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('app', { cityname : "San Francisco" });
});

//Subpar practice #1
router.get('/dance-detail.html', function(req, res, next){
	res.render('dance-detail');
});

router.get('/dance-list.html', function(req, res, next){
	res.render('dance-list');
});

router.get('/dance.html', function(req, res, next){
	res.render('dance');
});

router.get('/style-info.html', function(req, res, next){
	res.render('style-info');
});

module.exports = router;
