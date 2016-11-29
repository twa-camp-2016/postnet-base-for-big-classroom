const barcodeToZipcode=require('./src/barcodeTranferZipcode');
const zipcodeToBarcode=require('./src/zipCodeTransferBarcode');
var express = require('express');
var app = express();
app.get('/search', function (req, res) {

    /*var barcode = new barcodeToZipcode().execute(req.query.barcode)._info;
    res.send(barcode);*/

   var zipcode = new zipcodeToBarcode().execute(req.query.zipcode)._info;
   res.send(zipcode);


});
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//数字转条码
app.post('/',function(req,res){
    var barcode=new zipcodeToBarcode().execute(req.body.zipcode)._info;
    res.send(barcode);
});
/*//条码转数字
app.get('/bar',function (req,res) {
    console.log(req);
    var zipcode=new barcodeToZipcode().execute(req.param(barcode))._info;
    // res.send(zipcode);
     res.sendfile('index.html');

})*/
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});