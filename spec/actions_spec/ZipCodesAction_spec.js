/**
 * Created by lucky on 16-8-1.
 */
'use strict';

const ZipCodesAction=require("../../actions/ZipCodesAction");

describe("zipCodeAction",function () {
   let zipCodeAction;
    beforeEach(()=>{
        zipCodeAction=new ZipCodesAction();
    });

    it("should return init", function () {
        let cmd = 'q';
        let expected = 'init';
        let result = zipCodeAction.doAction(cmd);
        expect(result).toEqual(expected)
    });

    it("should return barcode ", function () {
        let cmd = '23456';
        let expected = 'postcode';
        let result = zipCodeAction.doAction(cmd);
        expect(result).toEqual(expected);
    });

    it("should return error", function () {
        let cmd = "23";
        let expected1 = 'postcode';
        let expected2 = "error:input wrong!!";
        spyOn(console, 'log');
        let result = zipCodeAction.doAction(cmd);
        expect(result).toEqual(expected1);
        expect(console.log).toHaveBeenCalledWith(expected2);
    });

});