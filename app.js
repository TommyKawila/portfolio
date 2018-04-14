var express = require('express');
var app = express();
var path = require("path");
 
app.use(express.static(__dirname));
 
// start server
var server = app.listen(8000, function() {
    console.log('Express is running.');
});