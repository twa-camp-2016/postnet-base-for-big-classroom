/**
 * Created by wt on 16-7-31.
 */
/*global require,describe,expect,it,toEqual,toBeUndefined */
const ZIPToBarcode = require("../src/ZIPToBarcode.js");
describe("ZIPToBarcode", function () {
    it("should return ZIP to Barcode", function () {
        let input = '23761';
        let result = '| ::|:| ::||: |:::| :||:: :::|| :::|| |';
        let temp = ZIPToBarcode.changeToBarcode(input);
        expect(temp).toEqual(result);
    });

    it("zip code is invalid", function () {
        let input = '2376233234234234';
        let temp = ZIPToBarcode.changeToBarcode(input);
        expect(temp).toBeUndefined();
    });

    it("wrong input num", function () {
        let input = '356722';
        let temp = ZIPToBarcode.changeToBarcode(input);
        expect(temp).toBeUndefined();
    });

});
