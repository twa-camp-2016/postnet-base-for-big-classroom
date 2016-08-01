"use strict";

const Barcodes = require("../../src/Barcode.js");

describe("barcode transform to zipCode", function () {
    let Barcode;
    beforeEach(() => {
        Barcode = new Barcodes();
    });
    it("should return a zipCode when the barcode is legal", function () {
        let barcode = "| :::|| ::|:| ::||: :|::| :|:|: :|:|: |";
        let result = Barcode.changeToZipCode(barcode);
        expect(result).toEqual("12345");
    });

    it("should return undefined when the barcode is not legal", function () {
        let barcode = ":::|| ::|:| ::||: :|::|";
        let result = Barcode.changeToZipCode(barcode);
        expect(result).toEqual(undefined);
    });

    it("should return undefined when the barcode is not legal", function () {
        let barcode = "barcode";
        let result = Barcode.changeToZipCode(barcode);
        expect(result).toEqual(undefined);
    });
    it("should return undefined when the barcode is not legal", function () {
        let barcode = " :::|| ::|:| ::||: :|::| :|:|: :|:|: |";
        let result = Barcode.changeToZipCode(barcode);
        expect(result).toEqual(undefined);
    });
    it("should return undefined when the barcode is not legal", function () {
        let barcode = "| :*:|| ::|:| ::||: :|::| :|:|: :|:|: |";
        let result = Barcode.changeToZipCode(barcode);
        expect(result).toEqual(undefined);
    });
    it("should return undefined when the barcode is not legal", function () {
        let barcode = "| :::|| ::|:| ::||: :|::| :|:|: :|:|: ";
        let result = Barcode.changeToZipCode(barcode);
        expect(result).toEqual(undefined);
    });


});
