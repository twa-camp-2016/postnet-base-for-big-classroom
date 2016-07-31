/**
 * Created by shiyue on 16-7-28.
 */
'use strict';

//noinspection JSUnresolvedFunction
let postcodeToBarcode = require("../../src/post-bar.js");
describe('is legal zipcode?', function () {
    it('legal zipcode', function () {
        let zipcode = '45056-1234';
        expect(postcodeToBarcode.isLegalZipcode(zipcode)).toBe(true);
    });
    
    it('illegal zipcode', function () {
        let zipcode = '123';
        expect(postcodeToBarcode.isLegalZipcode(zipcode)).toBe(false);
    });
});

describe('is true checkcode', function () {
    it('true checkcode', function () {
        let zipcode = '45056-1234';
        let expected='4505612340';
        expect(postcodeToBarcode.getCheckcode(zipcode)).toBe(expected);
    });
});

describe('get barcode', function () {
    it('barcode', function () {
        let zipcode = '45056-12340';
        let expected = '| :|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||::: |';
        expect(postcodeToBarcode.getBarcode(zipcode)).toEqual(expected);

    });
});

describe('zipcode tra barcode', function () {
    it('barcode', function () {
        let zipcode = '45056-1234';
        let expected = '| :|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||::: |';
        expect(postcodeToBarcode.zipcodeTraBarcode(zipcode)).toEqual(expected);
    });
    it('false', function () {
        let zipcode = '123';
        expect(postcodeToBarcode.zipcodeTraBarcode(zipcode)).toBe('ERR:the input is illegal!V_V');
    });
});
