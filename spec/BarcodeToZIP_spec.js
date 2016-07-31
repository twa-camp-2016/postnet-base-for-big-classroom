/**
 * Created by wt on 16-7-31.
 */
/* global require,describe,it,toEqual,expect,toBeUndefined*/
const BarcodeToZIP = require("../src/BarcodeToZIP.js");
describe("BarcodeToZIP", function () {
    it("should return Barcode to ZIP", function () {
        let input = '| ::|:| ::||: |:::| :||:: ::|:| ||::: |';
        let result = '23762';
        let temp = BarcodeToZIP.changeToZIP(input);
        expect(temp).toEqual(result);
    });

    it("input error", function () {
        let input = '| ::|:| ::||: |:::| :||:: ::|:||';
        let result = undefined;
        let temp = BarcodeToZIP.changeToZIP(input);
        expect(temp).toEqual(result);
    });

    it("wrong checkDigit", function () {
        let input = '| ::|:| ::||: |:::| :||:: :|:|: |';
        let result = undefined;
        let temp = BarcodeToZIP.changeToZIP(input);
        expect(temp).toEqual(result);
    });
});
