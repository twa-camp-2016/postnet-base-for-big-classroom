/**
 * Created by lucky on 16-7-28.
 */
/*global require*/
const BarcodeToZipCode = require("../../core/BarcodeToZipCode");
const ZipCodeToBarcode = require("../../core/ZipCodeToBarCode");

//条形码->邮编
describe("covertToZipCodes", function () {

    let barcode;

    beforeEach(()=> {
        barcode = new BarcodeToZipCode();
    });

    it("get final correct result", function () {
        let barCodes = "| ::|:| ::||: :|::| :|:|: :||:: ||::: |";
        let result = barcode.covertToZipCodes(barCodes);
        expect(result).toEqual({
            error: undefined,
            data: '23456'
        });
    });

    it("should return undefined if barcode is invalid", function () {
        let barCodes = "| ::|:| ::||: :|::| :|:|: :||::invalid char |";
        let result =barcode.covertToZipCodes(barCodes);
        expect(result).toEqual({
            error: 'input wrong!!',
            data: undefined
        });
    });
    it("check is have bar frame", function () {
        let barCodes = "::|:| ::||: :|:|: :||::";
        let result = barcode.covertToZipCodes(barCodes);
        expect(result).toEqual({
            error: 'input wrong!!',
            data: undefined
        });
    });
    it("check the check digit", function () {
        let barCodes = "| ::|:| ::||: :|::| :|:|: :||:: ::|:| |";
        let result = barcode.covertToZipCodes(barCodes);
        expect(result).toEqual({
            error: "the check digit is wrong!!!",
            data: undefined
        });
    });


});

//邮编->条形码

describe("covertToBarcode", function () {

    let zipCode;

    beforeEach(()=> {
        zipCode = new ZipCodeToBarcode();
    });

    it("get final zipCodes", function () {
        let zipCodes = '23456';
        let result = zipCode.covertToBarcode(zipCodes);
        expect(result).toEqual({
            error: undefined,
            data: '| ::|:|::||::|::|:|:|::||::||::: |'
        });
    });
    it("should return undefined if zipCode's bit is wrong", function () {
        let zipCodes = "23";
        let result = zipCode.covertToBarcode(zipCodes);
        expect(result).toEqual({
            error: "input wrong!!!",
            data: undefined
        });
    });
    it("check the zipCode is number or '-", function () {
        let zipCodes = "23*1";
        let result = zipCode.covertToBarcode(zipCodes);
        expect(result).toEqual({
            error: "input wrong!!!",
            data: undefined
        });
    });
});
