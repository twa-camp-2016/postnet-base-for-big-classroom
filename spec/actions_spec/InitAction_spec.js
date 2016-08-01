/**
 * Created by lucky on 16-8-1.
 */
'use strict';

const InitAction=require("../../actions/InitAction");

describe("initAction",function () {

    let initAction;

    beforeEach(()=>{
        initAction=new InitAction();
    });

    it("should return barcode", function () {
        let cmd = "1";
        let result = initAction.doAction(cmd);
        let expected = "barcode";
        expect(result).toEqual(expected);
    });

    it("should return postcode", function () {
        let cmd = "2";
        let result = initAction.doAction(cmd);
        let expected = "postcode";
        expect(result).toEqual(expected);
    });


    it("should to exit", function () {
        let cmd = "3";
        spyOn(console, 'log');
        spyOn(process, 'exit');
        let result = initAction.doAction(cmd);
        let expected = 0;
        expect(process.exit).toHaveBeenCalledWith(expected);
    });


    it("should return init", function () {
        let cmd = "5";
        spyOn(console, 'log');
        let result = initAction.doAction(cmd);
        let expected1 = "init";
        let expected2='Input error';
        expect(result).toEqual(expected1);
        expect(console.log).toHaveBeenCalledWith(expected2);
    });

});