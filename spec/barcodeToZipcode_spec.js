'use strict'
const barcodeToZipcode=require('./../action/barcodeToZipcode.js');
describe('barcodeToZipcode',function () {
    it("barcodeToZipcode test",function () {
        let result=new barcodeToZipcode();
        expect(result.doAction('1')).toEqual('barcode');
    })
    it("barcodeToZipcode test",function () {
        let result=new barcodeToZipcode();
        expect(result.doAction('2')).toEqual('init');
    })
    /*it("barcodeToZipcode test",function () {
        spyOn(process,"exit");
        barcodeToZipcode().doAction('q');
        expect(process.exit).toHaveBeenCalled();
    })*/
    it("barcodeToZipcode test",function () {
        let result=new barcodeToZipcode();
        spyOn(console,"log");
        expect(result.doAction('5')).toEqual('barcodeToZipcode');
    })
})