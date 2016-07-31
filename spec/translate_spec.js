'use strict';
const responsesTranslate = require('./../src/responsesTranslate.js');
const barcodeTranferZipcode = require('./../src/barcodeTranferZipcode.js');
const zipCodeTransferBarcode = require('./../src/zipCodeTransferBarcode.js');

describe("barcodeToZipcode", function () {
    it("should translate barcode to zipcode", function () {
        let barcode = new barcodeTranferZipcode();
        let response = new responsesTranslate("46725");
        expect(barcode.execute('| :|::| :||:: |:::| ::|:| :|:|: :||:: |')).toEqual(response);
    });

    it("should translate barcode to zipcode", function () {
        let barcode = new barcodeTranferZipcode();
        expect(barcode.execute(':|::| :||:: |:::| ::|:| :|:|: :||:: |')).toEqual(undefined);
    });

    it("should translate barcode to zipcode", function () {
        let barcode = new barcodeTranferZipcode();
        expect(barcode.execute(':|: :||:: |:::| ::|:| :|:|: :||:: |')).toEqual(undefined);
    });

    it("should translate barcode to zipcode", function () {
        let barcode = new barcodeTranferZipcode();
        expect(barcode.execute('| abcd| |::: |')).toEqual(undefined);
    });

    it("should translate barcode to zipcode", function () {
        let barcode = new barcodeTranferZipcode();
        expect(barcode.execute('条形码')).toEqual(undefined);
    });
});

describe("zipcodeToBarcode", function () {
    it("should translate zipcode to barcode", function () {
        let zipcode = new zipCodeTransferBarcode();
        let responses = new responsesTranslate('|:|::|:||::|:::|::|:|:|:|::||::|');
        expect(zipcode.execute('46725')).toEqual(responses);
    });

    it("should translate zipcode to barcode", function () {
        let zipcode = new zipCodeTransferBarcode();
        let responses = new responsesTranslate('|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|');
        expect(zipcode.execute('450561234')).toEqual(responses);
    });

    it("should translate zipcode to barcode", function () {
        let zipcode = new zipCodeTransferBarcode();
        let responses = new responsesTranslate('|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|');
        expect(zipcode.execute('45056-1234')).toEqual(responses);
    });

    it("should translate zipcode to barcode", function () {
        let zipcode = new zipCodeTransferBarcode();
        expect(zipcode.execute('abcd')).toEqual(undefined);
    });

    it("should translate zipcode to barcode", function () {
        let zipcode = new zipCodeTransferBarcode();
        expect(zipcode.execute('11111111')).toEqual(undefined);
    });

});

