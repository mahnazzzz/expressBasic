var express = require('express');
var app = express();
var path = require('path');



  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
  });
  
   var a = path.join(__dirname,'/index.html' );
  
  console.log("xxx" + a);

/* app.get('/',  (req, res)=> { //her bruger vi ES6 derfor
    // isted for funktion burger vi(=>)
    res.send("Hello, World!");
   }); */
   //node app.js for at bliver vist på local host
   app.listen(3000, function () {
    console.log("Server running at port 3000");
   });