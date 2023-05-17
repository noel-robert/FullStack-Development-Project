var express = require('express');
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( { extended: true } ));
let alert = require('alert'); 

var utility = require("../Public/utility.js");


app.post('/main_page', function(req, res) {
    var article_type = req.body.article_type;
    var article_names = req.body.article_names;
    var article_date = req.body.article_date;

    if(article_type=="-" && article_names=="" && article_date=="") {
        alert("All fields are empty, enter atleast one to proceed with querying")
        // exit somehow
    } 
    //    console.log("All fields are empty, enter atleast one to proceed with querying");

    
})

app.post('/', function(req, res) {})

app.post('/', function(req, res) {})



var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);

    console.log("Server running at port %s", port);
});