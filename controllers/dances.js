var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('danceDb', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'danceDb' database");
        db.collection('dances', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'dances' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

exports.getDance = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving dance: ' + id);
    db.collection('dances', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};

exports.getDances = function(req, res) {
    db.collection('dances', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.postDance = function(req, res) {
    var dance = req.body;
    console.log('Adding dance: ' + JSON.stringify(dance));
    db.collection('dances', function(err, collection) {
        collection.insert(dance, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}
 
exports.putDance = function(req, res) {
    var id = req.params.id;
    var dance = req.body;
    console.log('Updating dance: ' + id);
    console.log(JSON.stringify(dance));
    db.collection('dances', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, dance, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating dance: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(wine);
            }
        });
    });
}
 
exports.deleteDance = function(req, res) {
    var id = req.params.id;
    console.log('Deleting dance: ' + id);
    db.collection('dances', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}
 
/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
var populateDB = function() {
 
    var dances = [
        {
            "name": "Century Ballroom",
            "nextDate" : 1422316414693,
            "style" : "Swing",
            "id" : 1,
            "agelimit" : "21+",
            "recurring" : "E4",
            "free" : "never"
        },
        {
            "name": "Savoy Monday's",
            "nextDate" : 1428319414693,
            "style" : "Swing",
            "id" : 2,
            "agelimit" : "no age limit",
            "recurring" : "E2",
            "free" : "never"
        },
        {
            "name": "PPAA Thursday's",
            "nextDate" : 1422516814693,
            "style" : "Swing",
            "id" : 3,
            "agelimit" : "no age limit",
            "recurring" : "E5",
            "free" : "never"
        },
        {
            "name": "Tuesday Blues",
            "nextDate" : 1421513815693,
            "style" : "Blues",
            "id" : 4,
            "agelimit" : "no age limit",
            "recurring" : "E3",
            "free" : "never"
        },
        {
            "name": "Friday Night Blues",
            "nextDate" : 1420516814693,
            "style" : "Blues",
            "id" : 5,
            "agelimit" : "no age limit",
            "recurring" : "E6",
            "free" : "never"
        },
        {
            "name": "Om Practica",
            "nextDate" : 1422999814693,
            "style" : "Tango",
            "id" : 6,
            "agelimit" : "no age limit",
            "recurring" : "E4",
            "free" : "never"
        }
    ]
 
    db.collection('dances', function(err, collection) {
        collection.insert(dances, {safe:true}, function(err, result) {});
    });
 
};