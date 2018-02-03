var express = require('express');
var app = express();
var path = require('path');
var bodyParser= require('body-parser');

 
app.use(bodyParser.urlencoded({extended: true}));



  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
  });

  app.post('/bookmark', (req, res) => {
    console.log(req.body);
  });
   app.listen(3000, function () {
    console.log("Server running at port 3000");
   });