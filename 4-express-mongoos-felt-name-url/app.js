var express = require('express');
var bodyParser= require('body-parser');
var app = express();

var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://test:test@ds040167.mlab.com:40167/databasetest';


	
app.set('view engine', 'ejs');

var db;

MongoClient.connect(url, (err, database) => {
    if (err) return console.log(err);
    console.log("✔️ Connected correctly to server");
    db = database;
    app.listen(3000, function () {
      console.log("Server running at port 3000");
    });
});

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    db.collection('bookmark').find().toArray(function (err, results) {
      if (err) return console.log(err);
   
      res.render('index.ejs', { bookmarks: results });
    });
  });
 

app.post('/bookmark', (req, res) => {
    db.collection('bookmark').save(req.body, (err, results) => {
      if (err) return console.log(err);
   
      console.log('saved to database');
      res.redirect('/');
    });
  });
  /* app.get('/', (req, res) => {
    var cursor = db.collection('bookmark').find()
  }); */