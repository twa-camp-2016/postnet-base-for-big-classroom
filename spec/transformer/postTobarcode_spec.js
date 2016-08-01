/**
 * Created by hxc on 16-7-28.
 */
let post = require('../../transformer/core/PostcodeTransformer');

describe('postToBarcode', function () {
    it('should return barcode of length is five', function () {
        let result = post.postToBarcode('12345');
        let expected = `12345==|:::||::|:|::||::|::|:|:|::|:|:|
cd is 5`;
        expect(result).toEqual(expected);
    });

    it('postcode length is 9', function () {
        let result = post.postToBarcode('450561234');
        let expected = `450561234==|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|
cd is 0`;
        expect(result).toEqual(expected);
    });

    it('postcode length is 10', function () {
        let result = post.postToBarcode('45056-1234');
        let expected = `45056-1234==|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|
cd is 0`;
        expect(result).toEqual(expected);
    });

    it('postcode - is false', function () {
        let result = post.postToBarcode('450-1234456');
        expect(result).toEqual('您输入的邮编格式不正确，请重新输入');
    });

    it('postcode length is not 5 or 9 or 10 ', function () {
        let result = post.postToBarcode('1234');
        expect(result).toEqual('您输入的邮编格式不正确，请重新输入');
    });

    it('postcode has ilegal postcode',function(){
        let result=post.postToBarcode('12wew');
        expect(result).toEqual('您输入的邮编格式不正确，请重新输入');
    });

});
