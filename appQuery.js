'use strict'
let express = require('express')
let app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/query', function (req, res) {
    res.send(req.query.range);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});