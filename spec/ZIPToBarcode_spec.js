/**
 * Created by wt on 16-7-31.
 */
/*global require,describe,expect,it,toEqual,toBeUndefined */
const ZIPToBarcode = require("../src/ZIPToBarcode.js");
fdescribe("ZIPToBarcode", function () {

    let barcode;
    beforeEach(()=> {
        barcode = new ZIPToBarcode();
    });
    it("should return ZIP to Barcode", function () {
        let input = '23761';
        let temp = barcode.changeToBarcode(input);
        expect(temp).toEqual({
            error: undefined,
            data: '| ::|:| ::||: |:::| :||:: :::|| :::|| |'
        });
    });

    it("zip code is invalid", function () {
        let input = '2376233234234234';
        let temp = barcode.changeToBarcode(input);
        expect(temp).toEqual({
                error: 'input error',
                data: undefined
            }
        );
    });

    it("wrong input num digit", function () {
        let input = '356722';
        let temp = barcode.changeToBarcode(input);
        expect(temp).toEqual({
            error: 'input error',
            data: undefined
        });
    });

});
