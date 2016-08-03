/**
 * Created by qiyanzi on 16-8-1.
 */
var postnet = require("./transformer/postcodeAndBarcode");
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/exchangePostcode', function (req, res) {
    var t = req.body.code;
    let input = new postnet.PostcodeToBarcode(t);
    let barcode = input.postcodeToBarcode(t);
    res.send(barcode);
});

app.post('/exchangeBarcode', function (req, res) {
    var t = req.body.code;
    let input = new postnet.BarcodeToPostcode(t);
    let postcode = input.barcodeToPostcode(t);
    res.send(postcode);
});
// app.post('/postcode',function (req,res) {
//     console.log(req.body);
//     res.send('hello');
// });

app.listen(3000);