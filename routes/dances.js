var express = require('express');
var router = express.Router();
var controller = require('../controllers/dances');

//Retreieve all dances
router.get('/', function(req, res, next) {
	controller.getDances(req, res);
});

//Add a dance
router.post('/', function(req, res, next) {
	controller.postDance(req, res);
});

//Retrieve a dance by id
router.get('/:id', function(req, res, next){
	controller.getDance(req, res);
});

//Edit a  dance
router.put('/:id', function(req, res, next){
	controller.putDance(req, res);
});

//Delete a dance
router.delete('/:id', function(req, res, next){
	controller.deleteDance(req, res);
});


module.exports = router;