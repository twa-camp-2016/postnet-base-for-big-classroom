/**
 * Created by hxc on 16-8-3.
 */

var request = require('request')

describe('asyn', function () {
    it('should return hello', function () {
        request.post("http://localhost:3000/init", {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: ``
        }, function (error, response, body) {
            expect(body).toEqual("Hello");
        });
    });

    it('should return barcode', function () {
        request.post('http://localhost:3000/postTransformer', {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: 'cmd=12345'

        }, function (error, response, body) {
            expect(body).toEqual('|:::||::|:|::||::|::|:|:|::|:|:|\ncd is 5');
        });
    });

    it('should return postcode', function () {
        request.post('http://localhost:3000/barcodeTransfomer', {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: 'cmd=| :::|| ::|:| ::||: :|::| :|:|: :|:|: |'
        }, function (error, response, body) {
            expect(body).toEqual('12345');
        });
    })

});
