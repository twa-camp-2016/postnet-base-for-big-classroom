"use strict";

const BarcodeActions = require("../../action/BarcodeActions");
describe("barcodeActions", function () {
    let barcodeAction = new BarcodeActions();
    it("should return  barcodeToZipCode", function () {
        let cmd = "1";
        let result = barcodeAction.doAction(cmd);
        expect(result).toEqual('barcodeToPostCode');
    });
    it("should return  barcodeToZipCode", function () {
        let cmd = "2";
        let result = barcodeAction.doAction(cmd);
        expect(result).toEqual('init');
    });
    it("should return quit ", function () {
        spyOn(process, "exit");
        let cmd = "q";
        barcodeAction.doAction(cmd);
        expect(process.exit).toHaveBeenCalled();
    });

});
