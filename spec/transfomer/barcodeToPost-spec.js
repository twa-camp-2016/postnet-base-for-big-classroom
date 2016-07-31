/**
 * Created by ritter on 16-7-28.
 */
"use strict";

const fn = require("../../transfomer/barcodeToPost");

describe('barcodeToPost', function () {
    it('should return barcode 1', function () {
        let barcodes = '| |:|:: :|:|: |:::| :::|| ::||: :|:|: |';
        let expected = '95713';
        let result = fn.barcodeToPost(barcodes);

        expect(result).toEqual(expected)
    });

    it('should return barcode 2', function () {
        let barcodes = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        let expected = '45056-1234';
        let result = fn.barcodeToPost(barcodes);

        expect(result).toEqual(expected)
    });
});

describe('isValidationBarcode', function () {
    it('should return true 1', function () {
        let barcodes = '| |:|:: :|:|: |:::| :::|| ::||: :|:|: |';
        let expected = true;
        let result = fn.isValidationBarcode(barcodes);

        expect(result).toEqual(expected)
    });

    it('should return false 2', function () {
        let barcodes = ' |:|:: :|:|: |:::| :::|| ::||: :|:|: ';
        let expected = false;
        let result = fn.isValidationBarcode(barcodes);

        expect(result).toEqual(expected)
    });

    it('should return false 3', function () {
        let barcodes = ' | 1:|:: :|:|: |:::| :::|| ::||: :|:|: | ';
        let expected = false;
        let result = fn.isValidationBarcode(barcodes);

        expect(result).toEqual(expected)
    });


});

describe('formateBarcode', function () {
    it('should return formatedBarcode', function () {
        let barcodes = '| |:|:: :|:|: |:::| :::|| ::||: :|:|: |';
        let allBarcodes = ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let expected = [9, 5, 7, 1, 3, 5];
        let result = fn.formateBarcode(barcodes, allBarcodes);

        expect(result).toEqual(expected)
    });
});

describe('checkValidation', function () {
    it('should return the validation is true 1', function () {
        let postArr = [9, 5, 7, 1, 3, 5];
        let expected = true;
        let result = fn.checkValidation(postArr);

        expect(result).toEqual(expected)
    });
});

describe('formateResult', function () {
    it('should return the formated result 1', function () {
        let postArr = [9, 5, 7, 1, 3, 5];
        let expected = '95713';
        let barcode = fn.formateResult(postArr);

        expect(barcode).toEqual(expected)
    });

    it('should return the formated result 2', function () {
        let postArr = [4, 5, 0, 5, 6, 1, 2, 3, 4, 0];
        let expected = '45056-1234';
        let barcode = fn.formateResult(postArr);

        expect(barcode).toEqual(expected)
    });
});
