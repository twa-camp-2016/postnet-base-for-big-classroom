/**
 * Created by hxc on 16-7-28.
 */
'use strict';
let barcode = require('../../transformer/core/BarcodeTransformer');

describe('barcodeTopost',function(){
    it('should return true', function () {
        let test = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        let result = barcode.barcodeToPostCode(test);
        expect(result).toEqual('45056-1234');
    });

    it('input error length is false',function(){
        let test= '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| |';
        let result=barcode.barcodeToPostCode(test);
        expect(result).toEqual('您输入的格式不正确');
    });

    it('input error cd is false',function(){
        let test = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ::||: |';
        let result = barcode.barcodeToPostCode(test);
        expect(result).toEqual('您输入的格式不正确');

    });

    it('input error middle length is false',function(){
        let test='| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: |::| ::||: |';
        let result=barcode.barcodeToPostCode(test);
        expect(result).toEqual('您输入的格式不正确');
    });

    it('input error without frame',function(){
        let test='| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||:::';
        let result=barcode.barcodeToPostCode(test);
        expect(result).toEqual('您输入的格式不正确');
    });

    it('input error with invalid',function(){
        let test='| ?|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        let result=barcode.barcodeToPostCode(test);
        expect(result).toEqual('您输入的格式不正确');
    });

    it('input error with',function(){
        let test='| :|::|:|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        let result=barcode.barcodeToPostCode(test);
        expect(result).toEqual('您输入的格式不正确');
    });

    it('input error ',function(){
        expect(barcode.barcodeToPostCode('')).toEqual('您输入的格式不正确');
    });
});