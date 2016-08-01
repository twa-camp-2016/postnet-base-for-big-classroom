/**
 * Created by wanggenwang on 16-8-1.
 */
"use strict";
let BarcodeTransformer=require('../../src/core/BarcodeTransformer.js');

describe('BarcodeTransformer',()=>{
    let barcodeTransformer;
    beforeEach(()=>{
        barcodeTransformer = new BarcodeTransformer();
    });
    it('checkBarcode 6 barcode',()=>{
        let result=barcodeTransformer.barcodeToZIP('| :::|| ::|:| ::||: :|::| :|:|: :|:|: |');
        expect(result).toEqual('12345');
    });
    it('checkBarcode 10 barcode',()=>{
        let result = barcodeTransformer.barcodeToZIP('| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |');
        expect(result).toEqual('450561234');
    });
    it('checkBarcode lack space',()=>{
        let result=barcodeTransformer.barcodeToZIP('|:::|| ::|:| ::||: :|::| :|:|: :|:|: |');
        expect(result).toEqual(undefined);
    });
    it('checkBarcode lack begin',()=>{
        let result=barcodeTransformer.barcodeToZIP(' :::|| ::|:| ::||: :|::| :|:|: :|:|: |');
        expect(result).toEqual(undefined);
    });
    it('checkBarcode lack barcode',()=>{
        let result=barcodeTransformer.barcodeToZIP('| ::|:| ::||: :|::| :|:|: :|:|: |');
        expect(result).toEqual(undefined);
    });
    it('checkBarcode lack everything',()=>{
        let result=barcodeTransformer.barcodeToZIP('');
        expect(result).toEqual(undefined);
    });
    it('checkBarcode more begin',()=>{
        let result=barcodeTransformer.barcodeToZIP('|| :::|| ::|:| ::||: :|::| :|:|: :|:|: |');
        expect(result).toEqual(undefined);
    });
    it('checkBarcode more barcode',()=>{
        let result=barcodeTransformer.barcodeToZIP('| :::|| :::|| ::|:| ::||: :|::| :|:|: :|:|: |');
        expect(result).toEqual(undefined);
    });
    it('checkBarcode more space',()=>{
        let result=barcodeTransformer.barcodeToZIP('|  :::|| ::|:| ::||: :|::| :|:|: :|:|: |');
        expect(result).toEqual(undefined);
    });
    it('checkBarcode have other character',()=>{
        let result=barcodeTransformer.barcodeToZIP('| :::||, ::|:| ::||: :|::| :|:|: :|:|: |');
        expect(result).toEqual(undefined);
    });
});







