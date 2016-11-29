'use strict'
let express = require('express')
let app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/user1', function (req, res) {
    res.send(req.body.pet);
});
var server = app.listen(5000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
