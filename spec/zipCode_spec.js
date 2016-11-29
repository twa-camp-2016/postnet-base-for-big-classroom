'use strict'
const zipCode=require('./../action/zipCode.js');
describe('zipCode',function () {
    it("zipCode test",function () {
        let result=new zipCode();
        expect(result.doAction('1')).toEqual('zipcodeToBarcode');
    })
    it("zipCode test",function () {
        let result=new zipCode();
        expect(result.doAction('2')).toEqual('init');
    })
    /*it("zipCode test",function () {
        spyOn(process,"exit");
        zipCode().doAction('q');
        expect(process.exit).toHaveBeenCalled();
    })*/
    it("zipCode test",function () {
        let result=new zipCode();
        spyOn(console,"log");
        expect(result.doAction('5')).toEqual('zipCode');
    })
})