'use strict'
const barcode=require('./../action/barcode.js');
describe('barcode',function () {
    it("barcode test",function () {
        let result=new barcode();
        expect(result.doAction('1')).toEqual('barcodeToZipcode');
    })
    it("barcode test",function () {
        let result=new barcode();
        expect(result.doAction('q')).toEqual('init');
    })
   
    it("barcode test",function () {
        let result=new barcode();
        spyOn(console,"log");
        expect(result.doAction('5')).toEqual('barcode');
    })
})