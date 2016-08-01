"use strict";

const Zipcodes = require("../../src/Zipcode.js");

describe("zipCode transform to barcode", function () {
    let Zipcode;
    beforeEach(() => {
        Zipcode = new Zipcodes();
    });

    it("should return a barcode when the zipCode is legal", function () {
        let zipCode = "12345";
        let result = Zipcode.changeToBarcode(zipCode);
        expect(result).toEqual("|:::||::|:|::||::|::|:|:|::|:|:|");
    });

    it("should return a barcode when the zipCode is legal", function () {
        let zipCode = "12345-6789";
        let result = Zipcode.changeToBarcode(zipCode);
        expect(result).toEqual("|:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|");
    });

    it("should return a barcode when the zipCode is legal", function () {
        let zipCode = "123456789";
        let result = Zipcode.changeToBarcode(zipCode);
        expect(result).toEqual("|:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|");
    });

    it("should return undefined when the zipCode is not legal", function () {
        let zipCode = "1234";
        let result = Zipcode.changeToBarcode(zipCode);
        expect(result).toEqual(undefined);
    });

    it("should return undefined when the zipCode is not legal", function () {
        let zipCode = "123456-789";
        let result = Zipcode.changeToBarcode(zipCode);
        expect(result).toEqual(undefined);
    });

    it("should return undefined when the zipCode is not legal", function () {
        let zipCode = "1234567890";
        let result = Zipcode.changeToBarcode(zipCode);
        expect(result).toEqual(undefined);
    });

    it("should return undefined when the zipCode is not legal", function () {
        let zipCode = "#12345678";
        let result = Zipcode.changeToBarcode(zipCode);
        expect(result).toEqual(undefined);
    });

    it("should return undefined when the zipCode is not legal", function () {
        let zipCode = "zipcode";
        let result = Zipcode.changeToBarcode(zipCode);
        expect(result).toEqual(undefined);
    });

});