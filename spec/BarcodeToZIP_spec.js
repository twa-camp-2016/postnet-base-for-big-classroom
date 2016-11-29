/**
 * Created by wt on 16-7-31.
 */
/* global require,describe,it,toEqual,expect,toBeUndefined*/
const BarcodeToZIP = require("../src/BarcodeToZIP.js");
fdescribe("BarcodeToZIP", function () {
    let zip;
    beforeEach(()=> {
        zip = new BarcodeToZIP();
    });
    it("should return Barcode to ZIP", function () {
        let input = '| ::|:| ::||: |:::| :||:: ::|:| ||::: |';
        let temp = zip.changeToZIP(input);
        expect(temp).toEqual({
            error: undefined,
            data: '23762'
        });
    });

    it("input error", function () {
        let input = '| ::|:| ::||: |:::| :||:: ::|:||';
        let temp = zip.changeToZIP(input);
        expect(temp).toEqual({
            data: undefined,
            error: 'input error'
        });
    });

    it("wrong checkDigit", function () {
        let input = '| ::|:| ::||: |:::| :||:: :|:|: :|:|: |';
        let temp = zip.changeToZIP(input);
        expect(temp).toEqual({
            data: undefined,
            error: 'invalid check digit'
        });
    });
});
