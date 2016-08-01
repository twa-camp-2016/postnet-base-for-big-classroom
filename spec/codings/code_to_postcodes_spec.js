/*global dedcribe,it,expect,require*/
const barToPostcode=require('../../codings/code_to_postcodes.js');

describe("barToPostcode", function () {

    let barcode;
    beforeEach(()=> {
        barcode = new barToPostcode();
    });

    it("it should print Your barcodes format wrong!", function () {
        let inputs = '| *:::||  *||:::';
        let expected = {
            error:'Your barcodes format wrong!',
            data:undefined
        };
        let result = barcode.codingPostcodes(inputs);
        expect(result).toEqual(expected);
    });

    it("it should print Your barcodes length wrong!", function () {
        let inputs = '| ||||| ::|: |';
        let expected = {
            error: 'Your barcodes length wrong!',
            data: undefined
        };
        let result = barcode.codingPostcodes(inputs);
        expect(result).toEqual(expected);
    });

    it('it should print checkdigit wrong!', function () {
        let inputs = '| :::||  ||:::  ::|:|  :|::|  :::||  |:|:: |';
        let expected = {
            error:'Checkdigit wrong!',
            data:undefined
        };
        let result = barcode.codingPostcodes(inputs);
        expect(result).toEqual(expected);
    });

    it('it should change barcodes to postcodes', function () {
        let inputs = '| :::||  ||:::  ::|:|  :|::|  :::||  ::|:| |';
        let expected = {
            error:undefined,
            data:'10241'
        };
        let result = barcode.codingPostcodes(inputs);
        expect(result).toEqual(expected);
    });
});