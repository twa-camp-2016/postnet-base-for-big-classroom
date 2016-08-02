/**
 * Created by hxc on 16-8-1.
 */

const postTransformer=require('../../transformer/core/PostcodeTransformer');
const bodyParser=require('body-parser');
const barcodeTransformer=require('../../transformer/core/BarcodeTransformer');
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({extend:true}));
app.post('/init', function (req, res) {
    res.send('Hello');
});
app.post('/postTransformer', function(req, res){
    res.send(postTransformer.postToBarcode(req.body.cmd));
});
app.post('/barcodeTransfomer', function(req, res){
    res.send(barcodeTransformer.barcodeToPostCode(req.body.cmd));
});

app.listen(3000,function(){
    console.log('example app Listening on port 3000!');
});