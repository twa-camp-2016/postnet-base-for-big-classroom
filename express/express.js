/**
 * Created by lucky on 16-8-3.
 */
/**
 * Created by lucky on 16-8-2.
 */
'use strict';
const BarcodeToZipCode = require("../core/BarcodeToZipCode");
const ZipCodeToBarcode = require("../core/ZipCodeToBarCode");

const barcode = new BarcodeToZipCode();
const zipCode = new ZipCodeToBarcode();

var express = require('express');
var core = express();

core.get('/barcode', function (req, res) {
    res.send(barcode.covertToZipCodes(req.query.code));
});

var server1 = core.listen(3003, function () {
    var host = server1.address().address;
    var port = server1.address().port;
    console.log('http://localhost:' + port);
});

core.get('/zipCode', function (req, res) {
    res.send(zipCode.covertToBarcode(req.query.code));
});

var server2 = core.listen(3001, function () {
    var host = server2.address().address;
    var port = server2.address().port;
    console.log('http://localhost:' + port);
});

