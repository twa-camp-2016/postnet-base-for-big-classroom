/**
 * Created by zhangyiru on 16-8-3.
 */
var express = require('express');
const toBar = require("./core/postCodeToBarCode");
const toPost = require("./core/barCodeToPostCode");
let Bar = new toBar();
let Post = new toPost();
var app = express();

app.get('/barcode', function (req, res) {
    res.send(Bar.zipCodeToBarCode(req.query.code));
});

var server = app.listen(3006, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/postcode', function (req, res) {
    res.send(Post.barCodeToZipCode(req.query.code));
});

var server1 = app.listen(3008, function () {
    var host = server1.address().address;
    var port = server1.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
