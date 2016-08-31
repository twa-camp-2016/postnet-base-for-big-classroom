/**
 * Created by zhangyiru on 16-8-1.
 */
"use strict"
const toPost = require("../../express-lib/core/barCodeToPostCode");
const toBar = require("../../express-lib/core/postCodeToBarCode");
let bar = new toBar();
let post = new toPost();
describe('post code to bar code', ()=> {
    it('should output six bar code ', ()=> {
        let result = bar.zipCodeToBarCode('12345');
        expect(result).toEqual('| :::|| ::|:| ::||: :|::| :|:|: :|:|: |');
    });

    it('should out put ten barcode',function(){
        let result = bar.zipCodeToBarCode('123456789');
        expect(result).toEqual('| :::|| ::|:| ::||: :|::| :|:|: :||:: |:::| |::|: |:|:: :|:|: |');
    });

    it('should out put barcode',function(){
        let result = bar.zipCodeToBarCode("12345-6789");
        expect(result).toEqual("| :::|| ::|:| ::||: :|::| :|:|: :||:: |:::| |::|: |:|:: :|:|: |");
    });

    it('should output undefined',function(){
        let result = bar.zipCodeToBarCode("123");
        expect(result).toEqual(undefined);
    });

    it('should output undefined',function(){
        let result = bar.zipCodeToBarCode("123456");
        expect(result).toEqual(undefined);
    });

    it('should output undefind',function(){
        let result = bar.zipCodeToBarCode("12+456");
        expect(result).toEqual(undefined);
    });
});

describe('bar code to post code',function() {
    it('', function () {
        let result = post.barCodeToZipCode('| ::|| ||:: |');
        expect(result).toEqual(undefined);
    });

    it('', function () {
        let result = post.barCodeToZipCode('++||');
        expect(result).toEqual(undefined);
    });

    it('', function () {
        let result = post.barCodeToZipCode('|:::|:::||||:::');
        expect(result).toEqual(undefined);
    });

    it('', function () {
        let result = post.barCodeToZipCode("| :::||::|:| ::||: :|::| :|:|: :||:: |:::| |::|: |:|:: :|:|: |");
        expect(result).toEqual(undefined);
    })

    it('', function () {
        let result = post.barCodeToZipCode("| ::|:| ::||: :|::| :|:|: :||:: ||::: |");
        expect(result).toEqual("23456");
    });

    it('', function () {
        let result=post.barCodeToZipCode("| :::|| ::|:| ::||: :|::| :|:|: :||:: |:::| |::|: |:|:: :|:|: |")
        expect(result).toEqual("12345-6789");
    });
});

