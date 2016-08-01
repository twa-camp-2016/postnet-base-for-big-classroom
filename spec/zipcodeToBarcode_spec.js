'use strict'
const zipcodeToBarcode=require('./../action/zipcodeToBarcode.js');
describe('zipcodeToBarcode',function () {
    it("zipcodeToBarcode test",function () {
        let result=new zipcodeToBarcode();
        expect(result.doAction('1')).toEqual('zipCode');
    })
    it("zipcodeToBarcode test",function () {
        let result=new zipcodeToBarcode();
        expect(result.doAction('2')).toEqual('init');
    })
    /*it("zipcodeToBarcode test",function () {
        spyOn(process,"exit");
        zipcodeToBarcode().doAction('q');
        expect(process.exit).toHaveBeenCalled();
    })*/
    it("zipcodeToBarcode test",function () {
        let result=new zipcodeToBarcode();
        spyOn(console,"log");
        expect(result.doAction('5')).toEqual('zipcodeToBarcode');
    })
})
