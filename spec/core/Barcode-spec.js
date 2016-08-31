/**
 * Created by wangqi on 16-8-1.
 */
'use strict';
const Barcode = require('../../postApp/core/Barcode');

let barcode;
 beforeEach(() => {
     barcode = new Barcode();
});
describe("Barcode",() => {
    it("should return false when input barcode's format is illegal",() => {
        let result = barcode.transformToZipCode("|::|::|:|||::");
        let expectedErrorMsg = "illegal format";
        expect(result.success).toBeFalsy();
        expect(result.data).toEqual(expectedErrorMsg);
    });
    it("should return false when input barcode exist invalid symbol",() => {
        let result = barcode.transformToZipCode("| ::|:6 |::|: |");
        let expectedErrorMsg = "exist invalid symbol";
        expect(result.success).toBeFalsy();
        expect(result.data).toEqual(expectedErrorMsg);
    });
    it("should return false when input barcode's length is invalid",() => {
        let result = barcode.transformToZipCode("| :|: ||:: ::||: |") ;
        let expectedErrorMsg = "invalid barcode length";
        expect(result.success).toBeFalsy();
        expect(result.data).toEqual(expectedErrorMsg);
    });
    it("should return true when input barcode is valid",() => {
        let result = barcode.transformToZipCode("| :::|| ::|:| ::||: :|::| :|:|: :||:: |:::| |::|: |:|:: :|:|: |");
        let expectedZipcode = "12345-6789";
        expect(result.success).toBeTruthy();
        expect(result.data).toEqual(expectedZipcode);
    });
});
describe("checkDigit",() => {
    it("should return false when the checkDigit is unMerged",() => {
        let result = barcode.transformToZipCode("| :::|| ::|:| ::||: :|::| :|:|: :||:: |:::| |::|: |:|:: :::|| |");
        let expectedErrorMsg = "undefined";
        expect(result.success).toBeFalsy();
        expect(result.data).toEqual(expectedErrorMsg);
    });

});