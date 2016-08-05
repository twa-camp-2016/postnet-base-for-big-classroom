/**
 * Created by shiyue on 16-7-28.
 *!*/
'use strict';
//noinspection JSUnresolvedFunction
let Barcode = require("../../src/transformer/Barcode.js");

describe('is legal barcode?', function () {
    let BarcodeItem;
    beforeEach(()=> {
        BarcodeItem = new Barcode();
    });

    it("include other char(besides '|',':',' ')", function () {
        let barcode = '| *';
        expect(BarcodeItem.barcodeTraZipcode(barcode)).toBe('ERR:the input is illegal!V_V');
    });

    it("frame is not correct", function () {
        let barcode = '| ||| ';
        expect(BarcodeItem.barcodeTraZipcode(barcode)).toBe('ERR:the input is illegal!V_V');
    });

    it("item's length is not five", function () {
        let barcode = '| |||: |:::: |';
        expect(BarcodeItem.barcodeTraZipcode(barcode)).toBe('ERR:the input is illegal!V_V');
    });

    it('barcode tra zipcode', function () {
        let barcode = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        let expected = '45056-1234\ncd:0';
        expect(BarcodeItem.barcodeTraZipcode(barcode)).toEqual(expected);
    });
});

