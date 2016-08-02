/**
 * Created by tong on 16-8-2.
 */
'use strict';

const express = require('express');
const BarcodeToPostcode = require('../core/BarcodeToPostcode');
const PostcodeToBarcode = require('../core/PostcodeToBarcode');
const bodyParser = require('body-parser');

let app = express();
let barcodeToPostcode = new BarcodeToPostcode();
let postcodeToBarcode = new PostcodeToBarcode();

app.use(bodyParser.urlencoded({extend: true}));

app.post('/inputbarcode', function (req, res) {
  console.log(req.body.cmd);
  res.send(barcodeToPostcode.transferToPostCode(req.body.cmd));
});

app.post('/inputpostcode', function(req, res){
  res.send(postcodeToBarcode.transferToBarcode(req.body.cmd));
})

app.listen(3000, function () {
  console.log("listening on port 3000");
});