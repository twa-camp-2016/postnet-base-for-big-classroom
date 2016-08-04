'use strict';

const BarcodesAction = require("../../actions/BarcodesAction");

describe("barcode", function () {

    let barcode;

    beforeEach(()=> {
        barcode = new BarcodesAction();
    });

    it("should return init", function () {
        let cmd = 'q';
        let expected = 'init';
        let result = barcode.doAction(cmd);
        expect(result).toEqual(expected)
    });

    it("should return barcode ", function () {
        let cmd = '| :::|| ::|:| ::||: :|::| :|:|: :|:|: |';
        let expected = 'barcode';
        let result = barcode.doAction(cmd);
        expect(result).toEqual(expected);
    });

    it("should return error", function () {
        let cmd = "| ::|:| ::||: :|::| :|:|: :||::invalid char |";
        let expected1 = 'barcode';
        let expected2 = "error:input wrong!!";
        spyOn(console, 'log');
        let result = barcode.doAction(cmd);
        expect(result).toEqual(expected1);
        expect(console.log).toHaveBeenCalledWith(expected2);

    });

    it("should return error", function () {
        let cmd = "::|:| ::||: :|::| :|:|: :||::";
        let expected1 = 'barcode';
        let expected2 = "error:input wrong!!";
        spyOn(console, 'log');
        let result = barcode.doAction(cmd);
        expect(result).toEqual(expected1);
        expect(console.log).toHaveBeenCalledWith(expected2);

    });


});