var express = require('express');
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( { extended: true } ));

const path = require('path');
//app.use(express.static(path.join(__dirname, '..', 'CSS')));
//app.use(express.static('D:/FullStack Development Project/CSS'));
app.use(express.static('CSS'));


var utility = require("./Public/utility.js");
const notifier = require('node-notifier');

app.post('/main_page', function(req, res) {
    var article_type = req.body.article_type;
    var article_names = req.body.article_names;
    var article_date = req.body.article_date;

    if(article_type=="-" && article_names=="" && article_date=="") {
        notifier.notify('All fields are empty, enter atleast one to proceed with querying');
    } 

        console.log(article_type, article_names, article_date);
    // establish connection with database
    // utility.connectionEstablishment();

    // querying
    // let returnedData = utility.fetchData(article_type, article_names, article_date);

})

app.get('/signup', function(req, res) {
    res.sendFile('D:\FullStack Development Project\HTML\login.html')
})

app.post('/signup', function(req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.loginPassword;
    var passwordConfirm = req.body.reconfirmLoginPassword;


    if (password !== passwordConfirm) {
        notifier.notify('Passwords do not match');
        return;
    }

    utility.addUser(username, email, password);
    // res.redirect('http://localhost:8080/login.html');
    // res.redirect('file:///D:/FullStack%20Development%20Project/HTML/login.html');
    //res.redirect('/login');
    console.log(path);
    res.sendFile('D:/FullStack Development Project/HTML/login.html')
})

app.post('/login', function(req, res) {
    var loginUsername = req.body.loginUsername;
    var loginPassword = req.body.loginPassword;
    console.log(loginUsername);
})



var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);

    console.log("Server running at port %s", port);
});