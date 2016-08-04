/**
 * Created by wangqi on 16-8-3.
 */
const barcode = require("./barcodeToZipcode");
const zipcode = require("./zipcodeToBarcode");
let Barcode = new barcode();
let Zipcode = new zipcode();
var express = require('express');
var app = express();

app.get('/zipcode', function (req, res) {
    res.send(Zipcode.transformToBarCode(req.query.code));
});

var zipcodeServer = app.listen(3005, function () {
    var host = zipcodeServer.address().address;
    var port = zipcodeServer.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
app.get('/barcode', function (req, res) {
    res.send(Barcode.transformToZipCode(req.query.code));
});
var barcodeServer = app.listen(3006, function () {
    var host = barcodeServer.address().address;
    var port = barcodeServer.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});