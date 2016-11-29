'use strict'
var express = require('express');
var app = express();


app.get('/user/:name', function(req, res){
    var param = req.params.name;
    res.send('hello world ' + param); // hello world tj
});

var server = app.listen(2050, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
