/**
 * Created by hxc on 16-7-28.
 */
'use strict';
let barcode = require('../../transformer/barcodeTopost');

describe('isLegalBarcode', function () {
    it('should return true', function () {
        let test = '| :|::| |';
        let result = barcode.isLegalBarcode(test);
        expect(result).toEqual(true);
    });

    it('should return false', function () {
        let test = '|::::|';
        let result = barcode.isLegalBarcode(test);
        expect(result).toEqual(false);
    });
});

describe('formatBarcode', function () {
    it('should return a string array', function () {
        let test = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        let expected = [':|::|', ':|:|:', '||:::', ':|:|:', ':||::', ':::||', '::|:|', '::||:', ':|::|', '||:::'];
        let result = barcode.formatBarcode(test);

        expect(result).toEqual(expected);
    });
});


describe('getPostCode', function () {
    it('should return a number of string', function () {
        let test = [':|::|', ':|:|:', '||:::', ':|:|:', ':||::', ':::||', '::|:|', '::||:', ':|::|', '||:::'];
        let codeBars = barcode.loadBars();
        let expetced = {postCode: '450561234', cd: '0'};
        let result = barcode.getPostCode(test, codeBars);
        expect(result).toEqual(expetced);
    });
});

describe('isLegalCd', function () {
    it('should return true', function () {
        let test = {postCode: '450561234', cd: '0'};
        let reslut = barcode.isLegalCd(test);
        expect(reslut).toEqual(true);
    });

    it('should return false', function () {
        let test = {postCode: '450561234', cd: '5'};
        let reslut = barcode.isLegalCd(test);
        expect(reslut).toEqual(false);
    })
});

describe('barcodeLengthIsLegal', function () {
    it('should return true', function () {
        let test = '| ||||| |';
        let result = barcode.barcodeLengthIsFive(test);
        expect(result).toEqual(true);
    });
    it('should return false', function () {
        let test = '| |||| |';
        let result = barcode.barcodeLengthIsFive(test);
        expect(result).toEqual(false);
    });


    it('should return false', function () {
        let test = '|||||  |||||';
        let result = barcode.barcodeLengthIsFive(test);
        expect(result).toEqual(false);
    });
    it('should return false', function () {
        let test = '||||   |||||';
        let result = barcode.barcodeLengthIsFive(test);
        expect(result).toEqual(false);
    });

});

describe('barcodeToPostcode', function () {
    it('should return postcode', function () {
        let test = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        let expected = '45056-1234';
        let result = barcode.barcodeToPostCode(test);
        expect(result).toEqual(expected);
    });

    it('should return error', function () {
        let test = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||:::|';
        let result = barcode.barcodeToPostCode(test);
        expect(result).toEqual('您输入的格式不正确');
    })
})