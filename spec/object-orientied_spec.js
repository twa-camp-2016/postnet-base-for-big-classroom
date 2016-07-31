"use strict"
const inputBarcode = require("../src/barcodeToZipCode.js");
const inputZipCode = require("../src/zipCodeToBarcode.js");
const response_transform = require("../src/response.js");
describe("barcodeToZipCode",function(){
    it("should return zipCode from barcode",function(){
        let barcode = new inputBarcode();
        let response = new response_transform("12345");
        expect(barcode.execute("| :::|| ::|:| ::||: :|::| :|:|: :|:|: |")).toEqual(response);
    });
    it("should return zipCode from barcode",function(){
        let barcode = new inputBarcode();
        let response = new response_transform("123456789");
        expect(barcode.execute("| :::|| ::|:| ::||: :|::| :|:|: :||:: |:::| |::|: |:|:: :|:|: |")).toEqual(response);
    });

    it("should return zipCode from barcode",function(){
        let barcode = new inputBarcode();
        expect(barcode.execute(":::|| ::|:| ::||: :|::|")).toEqual(undefined);
    });
    it("should return zipCode from barcode",function(){
        let barcode = new inputBarcode();
        expect(barcode.execute("barcode")).toEqual(undefined);
    });
    it("should return zipCode from barcode",function(){
        let barcode = new inputBarcode();
        expect(barcode.execute("| :::|| ::|:| ::||: :|::| :|:|: :|:|: ")).toEqual(undefined);
    });
    it("should return zipCode from barcode",function(){
        let barcode = new inputBarcode();
        expect(barcode.execute("| :*:|| ::|:| ::||: :|::| :|:|: :|:|: |")).toEqual(undefined);
    });

});

describe("zipCodeToBarcode",function () {
    it("should return barcode from zipCode",function(){
        let zipCode = new inputZipCode();
        let response = new response_transform("|:::||::|:|::||::|::|:|:|::|:|:|");
        expect(zipCode.execute("12345")).toEqual(response);
    });
    it("should return barcode from zipCode",function(){
        let zipCode = new inputZipCode();
        let response = new response_transform("|:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|");
        expect(zipCode.execute("12345-6789")).toEqual(response);
    });
    it("should return barcode from zipCode",function(){
        let zipCode = new inputZipCode();
        let response = new response_transform("|:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|");
        expect(zipCode.execute("123456789")).toEqual(response);
    });
    it("should return barcode from zipCode",function(){
        let zipCode = new inputZipCode();
        expect(zipCode.execute("1234")).toEqual(undefined);
    });
    it("should return barcode from zipCode",function(){
        let zipCode = new inputZipCode();
        expect(zipCode.execute("123456-789")).toEqual(undefined);
    });
    it("should return barcode from zipCode",function(){
        let zipCode = new inputZipCode();
        expect(zipCode.execute("1234567890")).toEqual(undefined);
    });
    it("should return barcode from zipCode",function(){
        let zipCode = new inputZipCode();
        expect(zipCode.execute("#12345678")).toEqual(undefined);
    });
});