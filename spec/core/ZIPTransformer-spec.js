/**
 * Created by wanggenwang on 16-8-1.
 */
"use strict";
let ZIPTransformer = require('../../src/core/ZIPTransformer.js');

describe('ZIPTransformer',()=>{
    let zipTransformer;
    beforeEach(()=>{
        zipTransformer = new ZIPTransformer();
    });
    it('5 digit',()=>{
        let result = zipTransformer.ZIPToBarcode('12345');
        expect(result).toEqual('|:::||::|:|::||::|::|:|:|::|:|:|');
    });
    it('9 digit',()=>{
        let result = zipTransformer.ZIPToBarcode('123456789');
        expect(result).toEqual('|:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|');
    });
    it('9 digit with -',()=>{
        let result = zipTransformer.ZIPToBarcode('12345-6789');
        expect(result).toEqual('|:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|');
    });
    it('lack digit',()=>{
        let result = zipTransformer.ZIPToBarcode('12345-678');
        expect(result).toEqual(undefined);
    });
    it('lack everything',()=>{
        let result = zipTransformer.ZIPToBarcode('');
        expect(result).toEqual(undefined);
    });
    it('more digit',()=>{
        let result = zipTransformer.ZIPToBarcode('12345-67890');
        expect(result).toEqual(undefined);
    });
    it('more -',()=>{
        let result = zipTransformer.ZIPToBarcode('12345-6789-');
        expect(result).toEqual(undefined);
    });
    it('have other character',()=>{
        let result = zipTransformer.ZIPToBarcode('12345-,6789');
        expect(result).toEqual(undefined);
    });
});







