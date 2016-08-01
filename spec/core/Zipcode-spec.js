/**
 * Created by wangqi on 16-8-1.
 */
'use strict';
const Zipcode = require('../../postApp/core/Zipcode');

describe('Zipcode', () => {
    let zipcode;
    beforeEach(()=> {
        zipcode = new Zipcode();
    });

    it('should return false when length is illegal', () => {

        let result = zipcode.transformToBarCode('123456');
        let expectedErrorMsg = 'length is illegal';
        expect(result.success).toBeFalsy();
        expect(result.data).toEqual(expectedErrorMsg);

    });
    it("should return false when contains illegal symbol",() => {
        let result = zipcode.transformToBarCode("1234#5*71");
        let expectedErrorMsg = "containing illegal symbol";
        expect(result.success).toBeFalsy();
        expect(result.data).toEqual(expectedErrorMsg);
    });
    it("should return false when - location is wrong",() => {
        let result = zipcode.transformToBarCode("123-456789");
        let expectedErrorMsg = "- location error";
        expect(result.success).toBeFalsy();
        expect(result.data).toEqual(expectedErrorMsg);
    })
    it('should return transformed barcode when input zipcode is legal', () => {
        let result = zipcode.transformToBarCode('123456789');
        let expectedBarcode = "| :::|| ::|:| ::||: :|::| :|:|: :||:: |:::| |::|: |:|:: :|:|: |";
        expect(result.success).toBeTruthy();
        expect(result.data).toEqual(expectedBarcode);
    })
})