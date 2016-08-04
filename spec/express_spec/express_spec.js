
var request = require('request')

describe('asyn', function () {
    it('should return hello', function (done) {
        request.post("http://localhost:3000/init", {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: ``
        }, function (error, response, body) {
            expect(body).toEqual("Hello");
            done();
        });
    });

    it('should return barcode', function (done) {

        request.post('http://localhost:3000/postTransformer', {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: 'cmd=12345'

        }, function (error,response, body) {
            expect(JSON.parse(body)).toEqual({"error":"","data":"12345==|:::||::|:|::||::|::|:|:|::|:|:|\ncd is 5"});
            done();
        });
    });

    it('should return postcode', function (done) {
        request.post('http://localhost:3000/barcodeTransfomer', {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: 'cmd=| :::|| ::|:| ::||: :|::| :|:|: :|:|: |'
        }, function (error, response, body) {
            expect(JSON.parse(body)).toEqual({error:'',data:'12345'});
            done();
        });
    })

});
