/**
 * Created by shiyue on 16-7-28.
 */
'use strict';

//noinspection JSUnresolvedFunction
let PostcodeAction = require("../../src/transformer/Postcode.js");

describe('is legal zipcode?', function () {
    let postcodeItem;
    beforeEach(()=>postcodeItem = new PostcodeAction());

    it('false', function () {
        let zipcode = '123';
        expect(postcodeItem.zipcodeTraBarcode(zipcode)).toBe('ERR:the input is illegal!V_V');
    });

    it('barcode', function () {
        let zipcode = '45056-1234';
        let expected = '| :|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||::: |';
        expect(postcodeItem.zipcodeTraBarcode(zipcode)).toEqual(expected);
    });
});
