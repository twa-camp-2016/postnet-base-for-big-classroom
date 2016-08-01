'use strict';
const responsesTranslate = require('./../src/responsesTranslate.js');
const BarcodeTranferZipcode = require('./../src/barcodeTranferZipcode.js');
const ZipCodeTransferBarcode = require('./../src/zipCodeTransferBarcode.js');

describe("barcodeToZipcode", function () {
    it("should translate barcode to zipcode", function () {
        let barcode = new BarcodeTranferZipcode();
        let response = new responsesTranslate("46725");
        expect(barcode.execute('| :|::| :||:: |:::| ::|:| :|:|: :||:: |')).toEqual(response);
    });

    it("should translate barcode to zipcode", function () {
        let barcode = new BarcodeTranferZipcode();
        let response = new responsesTranslate("error");
        expect(barcode.execute(':|::| :||:: |:::| ::|:| :|:|: :||:: |')).toEqual(response);
    });

    it("should translate barcode to zipcode", function () {
        let barcode = new BarcodeTranferZipcode();
        let response = new responsesTranslate("error");
        expect(barcode.execute(':|: :||:: |:::| ::|:| :|:|: :||:: |')).toEqual(response);
    });

    it("should translate barcode to zipcode", function () {
        let barcode = new BarcodeTranferZipcode();
        let response = new responsesTranslate("error");
        expect(barcode.execute('| abcd| |::: |')).toEqual(response);
    });

    it("should translate barcode to zipcode", function () {
        let barcode = new BarcodeTranferZipcode();
        let response = new responsesTranslate("error");
        expect(barcode.execute('条形码')).toEqual(response);
    });
});

describe("zipcodeToBarcode", function () {
    it("should translate zipcode to barcode", function () {
        let zipcode = new ZipCodeTransferBarcode();
        let responses = new responsesTranslate('|:|::|:||::|:::|::|:|:|:|::||::|');
        expect(zipcode.execute('46725')).toEqual(responses);
    });

    it("should translate zipcode to barcode", function () {
        let zipcode = new ZipCodeTransferBarcode();
        let responses = new responsesTranslate('|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|');
        expect(zipcode.execute('450561234')).toEqual(responses);
    });

    it("should translate zipcode to barcode", function () {
        let zipcode = new ZipCodeTransferBarcode();
        let responses = new responsesTranslate('|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|');
        expect(zipcode.execute('45056-1234')).toEqual(responses);
    });

    it("should translate zipcode to barcode", function () {
        let zipcode = new ZipCodeTransferBarcode();
        let response = new responsesTranslate("error");
        expect(zipcode.execute('abcd')).toEqual(response);
    });

    it("should translate zipcode to barcode", function () {
        let zipcode = new ZipCodeTransferBarcode();
        let response = new responsesTranslate("error");
        expect(zipcode.execute('11111111')).toEqual(response);
    });

});

