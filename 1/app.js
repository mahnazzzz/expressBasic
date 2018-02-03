var express = require('express');
var app = express();



app.get('/', function (req, res) {
    res.send("Hello, World!");
   });
   //node app.js for at bliver vist på local host
   app.listen(3000, function () {
    console.log("Server running at port 3000");
   });