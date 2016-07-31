/**
 * Created by qiyanzi on 16-7-31.
 */
'use strict';
const postnets = require("../../transformer/translate");

//postcode to barcode

describe('postcodeToBarcode', function () {
    it('it should return barcode', function () {
        let inputPostcodes = '95713';
        let result = postnets.postcodeToBarcode(inputPostcodes);
        expect(result).toEqual('||:|:::|:|:|:::|:::||::||::|:|:|');
    });
    it('it should return barcode', function () {
        let inputPostcodes = '95713-1234';
        let result = postnets.postcodeToBarcode(inputPostcodes);
        expect(result).toEqual('||:|:::|:|:|:::|:::||::||::::||::|:|::||::|::|:|:|:|');
    });
    it('it should return barcode', function () {
        let inputPostcodes = '957131234';
        let result = postnets.postcodeToBarcode(inputPostcodes);
        expect(result).toEqual('||:|:::|:|:|:::|:::||::||::::||::|:|::||::|::|:|:|:|');
    });
    it('it should return input errors', function () {
        let inputPostcodes = '9571';
        let result = postnets.postcodeToBarcode(inputPostcodes);
        expect(result).toEqual('input errors');
    });
    it('it should return input errors', function () {
        let inputPostcodes = '957131';
        let result = postnets.postcodeToBarcode(inputPostcodes);
        expect(result).toEqual('input errors');
    });
    it('it should return input errors', function () {
        let inputPostcodes = '95713-12345';
        let result = postnets.postcodeToBarcode(inputPostcodes);
        expect(result).toEqual('input errors');
    });
    it('it should return input errors', function () {
        let inputPostcodes = '9571312345';
        let result = postnets.postcodeToBarcode(inputPostcodes);
        expect(result).toEqual('input errors');
    });
    it('it should return input errors', function () {
        let inputPostcodes = '9571-12345';
        let result = postnets.postcodeToBarcode(inputPostcodes);
        expect(result).toEqual('input errors');
    });
});

//barcode to postcode
describe("barcodeToPostcode", function () {
    it('it should return postcode', function () {
        let inputBarcode = '| :|::| :|:|: ||::: :|:|: :||:: ||::: |';
        let result = postnets.barcodeToPostcode(inputBarcode);
        expect(result).toEqual('45056');
    });
    it('it should return postcode', function () {
        let inputBarcode = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        let result = postnets.barcodeToPostcode(inputBarcode);
        expect(result).toEqual('45056-1234');
    });
    it('it should return a wrong input', function () {
        let inputBarcode = '| :|::| :|:|: ||::: :|:|: :||:: |';
        let result = postnets.barcodeToPostcode(inputBarcode);
        expect(result).toEqual('a wrong input');
    });
    it('it should return a wrong input', function () {
        let inputBarcode = ' :|::| :|:|: ||::: :|:|: :||:: ||::: |';
        let result = postnets.barcodeToPostcode(inputBarcode);
        expect(result).toEqual('a wrong input');
    });
    it('it should return a wrong input', function () {
        let inputBarcode = ' :|::| :|:|: ||::: :|:|: :||:: ||::: ';
        let result = postnets.barcodeToPostcode(inputBarcode);
        expect(result).toEqual('a wrong input');
    });
    it('it should return a wrong input', function () {
        let inputBarcode = '|*:|::| :|:|: ||::: :|:|: :||:: ||::: |';
        let result = postnets.barcodeToPostcode(inputBarcode);
        expect(result).toEqual('a wrong input');
    });
    it('it should return a wrong input', function () {
        let inputBarcode = '| :|::| :|:|: ||::: :|:|: :||:: ||::: ||::: |';
        let result = postnets.barcodeToPostcode(inputBarcode);
        expect(result).toEqual('a wrong input');
    });
    it('it should return a wrong input', function () {
        let inputBarcode = '| :|::| :|:|: ||::: :|:|: :||:: |';
        let result = postnets.barcodeToPostcode(inputBarcode);
        expect(result).toEqual('a wrong input');
    });
    it('it should return postcode', function () {
        let inputBarcode = '| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        let result = postnets.barcodeToPostcode(inputBarcode);
        expect(result).toEqual('a wrong input');
    });
    it('it should return postcode', function () {
        let inputBarcode = '| :|::| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        let result = postnets.barcodeToPostcode(inputBarcode);
        expect(result).toEqual('a wrong input');
    });
    it('it should return postcode', function () {
        let inputBarcode = '|:|::| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        let result = postnets.barcodeToPostcode(inputBarcode);
        expect(result).toEqual('a wrong input');
    });
    it('should return a wrong postcode', function () {
        let inputBarcode = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| |:|:: |';
        let result = postnets.barcodeToPostcode(inputBarcode);
        expect(result).toEqual('a wrong postcode');
    });
    it('it should return a wrong postcode', function () {
        let inputBarcode = '| :|::| :|:|: ||::: :|:|: :||:: |:|:: |';
        let result = postnets.barcodeToPostcode(inputBarcode);
        expect(result).toEqual('a wrong postcode');
    });
});