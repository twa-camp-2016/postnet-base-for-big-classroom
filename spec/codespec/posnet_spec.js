/**
 * Created by lucky on 16-7-28.
 */
/*global require*/
const convert = require("../../src/posnet.js");

//条形码->邮编
describe("covertToZipCodes", function () {
    it("get final zipCodes", function () {
        let barCodes = "| ::|:|  ::||:  :|::|  :|:|:   :||:: |";
        let zipCodes = '2345';
        let result = convert.test1.covertToZipCodes(barCodes);
        expect(result).toEqual(zipCodes);
    });
    it("should return undefined if barcode is invalid", function () {
        let barCodes = "| ::|:| ::||: :|::| :|:|: :||::invalid char |";
        let result = convert.test1.covertToZipCodes(barCodes);
        expect(result).toEqual("Please check your  barCodes,your input wrong!!!!!");
    });
    it("check is have bar frame", function () {
        let barCodes = "::|:| ::||: :|:|: :||::";
        let result = convert.test1.covertToZipCodes(barCodes);
        expect(result).toEqual("Please check your  barCodes,your input wrong!!!!!");
    });
    it("check the check digit", function () {
        let barCodes = "| ::|:| ::||: :|::| :|:|: :||:: ::|:| |";
        let result = convert.test1.covertToZipCodes(barCodes);
        expect(result).toEqual("the check digit is wrong!!!");
    });
});

//邮编->条形码

describe("covertToBarcode", function () {
    it("get final zipCodes", function () {
        let zipCodes = '23456';
        let barCodes = "| ::|:|::||::|::|:|:|::||::||::: |";
        let result = convert.test2.covertToBarcode(zipCodes);
        expect(result).toEqual(barCodes);
    });
    it("should return undefined if zipCode's bit is wrong", function () {
        let zipCodes = "23";
        let result = convert.test2.covertToBarcode(zipCodes);
        expect(result).toEqual("please check your zipCodes,the input wrong!!!!!");
    });
    it("check the zipCode is number or '-", function () {
        let zipCodes = "23*1";
        let result = convert.test2.covertToBarcode(zipCodes);
        expect(result).toEqual("please check your zipCodes,the input wrong!!!!!");
    });
});
