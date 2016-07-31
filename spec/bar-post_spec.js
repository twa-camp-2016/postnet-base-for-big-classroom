/**
 * Created by shiyue on 16-7-28.
 */
'use strict';
//noinspection JSUnresolvedFunction
let barcodeToZipcode = require("../../src/bar-post.js");
describe('is legal barcode?', function () {
    it("include other char(besides '|',':',' ')", function () {
        let barcode = '|*';
        expect(barcodeToZipcode.isLegalBarcode(barcode)).toBe(false);
    });

    it("frame is not correct", function () {
        let barcode = '| ||| ';
        expect(barcodeToZipcode.isLegalBarcode(barcode)).toBe(false);
    });
    it("item's length is not five", function () {
        let barcode = '| |||: |:::: |';
        expect(barcodeToZipcode.isLegalBarcode(barcode)).toBe(false);
    });
    it("the correct barcode", function () {
        let barcode = '| |::|: ::|:: |';
        expect(barcodeToZipcode.isLegalBarcode(barcode)).toBe(true);
    });
});

describe("get a arr that every item's length is five", function () {
    it("one", function () {
        let barcode = '| ||::: ||:|| |';
        let expected = ['||:::', '||:||'];
        expect(barcodeToZipcode.formatBarcode(barcode)).toEqual(expected);
    });
});

describe("check checkcode", function () {
    it("checkcode is true", function () {
        let barcodeArr = [':|::|', ':|:|:', '||:::', ':|:|:', ':||::', ':::||', '::|:|', '::||:', ':|::|','||:::'];
        expect(barcodeToZipcode.checkCheckcode(barcodeArr)).toBe(true);
    });
});

describe("get the mojar barcode", function () {
    it('mojar barcode', function () {
        let barcodeArr = [':|::|', ':|:|:', '||:::', ':|:|:', ':||::', ':::||', '::|:|', '::||:', ':|::|','||:::'];
        let expected = '45056-1234\ncd:0';
        expect(barcodeToZipcode.getZipcode(barcodeArr)).toEqual(expected);
    });
});

describe('barcode tra zipcode', function () {
    it('barcode tra zipcode', function () {
        let barcode = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        let expected = '45056-1234\ncd:0';
        expect(barcodeToZipcode.barcodeTraZipcode(barcode)).toEqual(expected);
    });

    it('false', function () {
        let barcode = '| |*||| |';
        expect(barcodeToZipcode.barcodeTraZipcode(barcode)).toBe('ERR:the input is illegal!V_V');
    });
});

