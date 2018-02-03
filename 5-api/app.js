var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
 
var app = express();
 
// this will let us get the data from a POST request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
var router = express.Router(); // routes for our api
 
// go to http://localhost:3001/api and make sure everything is working
router.get('/', function (req, res) {
 res.json({ message: 'Hello, World!' });
});
 
// more routes here
 
app.use('/api', router); // all of our routes will be prefixed with /api
 
app.listen(3001, function () {
 console.log("Server running at port 3001");
});