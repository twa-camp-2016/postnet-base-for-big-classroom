"use strict";

const BarcodeToPostCodeActions = require("../../action/BarcodeToPostCodeActions");
describe('baecodeToPostcode', function () {
    let barcodeToPostCodeActions = new BarcodeToPostCodeActions();
    it("should return postCode", function () {
        let cmd = "| :::|| ::|:| ::||: :|::| :|:|: :|:|: |";
        let result = barcodeToPostCodeActions.doAction(cmd);
        expect(result).toEqual("barcode");
    });
});
