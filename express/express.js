/**
 * Created by wt on 16-8-3.
 */
/*global require*/
let express = require('express');
let app = express();
let app_2=express();
let zip=require('../src/ZIPToBarcode.js');
let barcode=require('../src/BarcodeToZIP.js');
Zip=new zip();
Barcode=new barcode();
app.get('/Barcode', function (req, res) {
    let code=req.query.code;
    res.send(Zip.changeToBarcode(code));
});

app_2.get('/ZIP', function (req, res) {
    let code=req.query.code;
    res.send(Barcode.changeToZIP(code));
});

let server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});


let server_2 = app_2.listen(5000, function () {
    let host = server_2.address().address;
    let port = server_2.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});