var express = require('express');
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( { extended: true } ));

var utility = require("../Public/utility.js");


app.post('/', function(req, res) {})

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);

    console.log("Server running at port %s", port);
});