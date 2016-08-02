/**
 * Created by tong on 16-8-2.
 */
'use strict';

const express = require('express');
const BarcodeToPostcode = require('../transformer/core/BarcodeToPostcode');
const PostcodeToBarcode = require('../transformer/core/PostcodeToBarcode');
const bodyParser = require('body-parser');

let app = express();
let barcodeToPostcode = new BarcodeToPostcode();
let postcodeToBarcode = new PostcodeToBarcode();

app.use(bodyParser.urlencoded({extend: true}));

app.post('/bTop', function (req, res) {
  res.send(barcodeToPostcode.transferToPostCode(req.body.name));
});

app.post('/pTob', function(req, res){
  res.send(postcodeToBarcode.transferToBarcode(req.body.name));
})

app.listen(3000, function () {
  console.log("listening on port 3000");
});