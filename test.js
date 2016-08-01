const barcodeToZipcode=require('./src/barcodeTranferZipcode');
const zipcodeToBarcode=require('./src/zipCodeTransferBarcode');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    //条码转邮编
    var barcode = new barcodeToZipcode().execute(input)._info;
    //邮编转条码
    var zipcode = new zipcodeToBarcode().execute("12345")._info;
    res.send(zipcode);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});