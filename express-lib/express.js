/**
 * Created by zhangyiru on 16-8-3.
 */
var express = require('express');
const toPost = require("./core/barCodeToPostCode");
const toBar = require("./core/postCodeToBarCode");
let barcode = new toBar();
let postcode = new toPost();
var app = express();
app.use(express.static('public'));

app.get('/barcode', function (req, res) {
    res.send(barcode.zipCodeToBarCode(req.query.code));
});
app.get('/postcode', function (req, res) {
    res.send(postcode.barCodeToZipCode(req.query.code));
});

var server = app.listen(3006, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
