const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/main_page', (req, res) => {
  res.sendFile(path.join(__dirname, 'main_page.html'));
});

var server=app.listen(port,function()
{
    // call back function used
    var host=server.address().address
    var port=server.address().port
    console.log("Example app listening at http://%s;%s",host,port)
    console.log("Server running at 8080")

}); 