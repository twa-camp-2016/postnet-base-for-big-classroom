const initActions = require("../../action/init");
const postcode = require("../../action/postcode");
const barcode = require("../../action/barcode");
const exchangePostcode = require("../../action/exchangePostcode");
const exchangeBarcode = require("../../action/exchangeBarcode");

describe("init", function () {
    let initAction = new initActions();
    it("should return actionName", function () {
        let currentAction = "init";
        let cmd = "1";
        let result = initAction.doAction(cmd);
        let expectResult = "postcode";
        expect(result).toEqual(expectResult);
    });
    it("should return actionName", function () {
        let currentAction = "init";
        let cmd = "2";
        let result = initAction.doAction(cmd);
        let expectResult = "barcode";
        expect(result).toEqual(expectResult);
    });
    it("should return actionName", function () {
        let currentAction = "init";
        let cmd = "3";
        spyOn(console, 'log');
        let result = initAction.doAction(cmd);
        let expectResult = "init";
        expect(result).toEqual(expectResult);
    });
    it("should end", function () {
        let currentAction = "init";
        let cmd = "q";
        spyOn(console, 'log');
        spyOn(process, 'exit');
        let result = initAction.doAction(cmd);
        let expectResult = 0;
        expect(process.exit).toHaveBeenCalledWith(expectResult);
    });
});

describe("postcode", function () {
    let postcodes = new postcode();
    it("should return actionName", function () {
        let currentAction = "postcode";
        let cmd = "1";
        let result = postcodes.doAction(cmd);
        let expectResult = "exchangePostcode";
        expect(result).toEqual(expectResult);
    });
    it("should return actionName", function () {
        let currentAction = "postcode";
        let cmd = "2";
        let result = postcodes.doAction(cmd);
        let expectResult = "init";
        expect(result).toEqual(expectResult);
    });
    it("should return actionName", function () {
        let currentAction = "postcode";
        let cmd = "3";
        spyOn(console, 'log');
        let result = postcodes.doAction(cmd);
        let expectResult = "postcode";
        expect(result).toEqual(expectResult);
    });
    it("should end", function () {
        let currentAction = "postcode";
        let cmd = "q";
        spyOn(console, 'log');
        spyOn(process, 'exit');
        let result = postcodes.doAction(cmd);
        let expectResult = 0;
        expect(process.exit).toHaveBeenCalledWith(expectResult);
    });
});

describe("barcode", function () {
    let barcodes = new barcode();
    it("should return actionName", function () {
        let currentAction = "barcode";
        let cmd = "1";
        let result = barcodes.doAction(cmd);
        let expectResult = "exchangeBarcode";
        expect(result).toEqual(expectResult);
    });
    it("should return actionName", function () {
        let currentAction = "barcode";
        let cmd = "2";
        let result = barcodes.doAction(cmd);
        let expectResult = "init";
        expect(result).toEqual(expectResult);
    });
    it("should return actionName", function () {
        let currentAction = "barcode";
        let cmd = "3";
        spyOn(console, 'log');
        let result = barcodes.doAction(cmd);
        let expectResult = "barcode";
        expect(result).toEqual(expectResult);
    });
    it("should end", function () {
        let currentAction = "barcode";
        let cmd = "q";
        spyOn(console, 'log');
        spyOn(process, 'exit');
        let result = barcodes.doAction(cmd);
        let expectResult = 0;
        expect(process.exit).toHaveBeenCalledWith(expectResult);
    });
});

describe("exchangePostcode", function () {
    let exchangePostcodes = new exchangePostcode();
    it("should return actionName", function () {
        let currentAction = "exchangePostcode";
        let cmd = "1";
        let result = exchangePostcodes.doAction(cmd);
        let expectResult = "postcode";
        expect(result).toEqual(expectResult);
    });
    it("should return actionName", function () {
        let currentAction = "exchangePostcode";
        let cmd = "2";
        let result = exchangePostcodes.doAction(cmd);
        let expectResult = "init";
        expect(result).toEqual(expectResult);
    });
    it("should return actionName", function () {
        let currentAction = "exchangePostcode";
        let cmd = "12345";
        spyOn(console, "log");
        let result = exchangePostcodes.doAction(cmd);
        let expectResult = "exchangePostcode";
        expect(result).toEqual(expectResult);
    });
    it("should end", function () {
        let currentAction = "exchangePostcode";
        let cmd = "q";
        spyOn(console, 'log');
        spyOn(process, 'exit');
        let result = exchangePostcodes.doAction(cmd);
        let expectResult = 0;
        expect(process.exit).toHaveBeenCalledWith(expectResult);
    });
});

describe("exchangeBarcode", function () {
    let exchangeBarcodes = new exchangeBarcode();
    it("should return actionName", function () {
        let currentAction = "exchangeBarcode";
        let cmd = "1";
        let result = exchangeBarcodes.doAction(cmd);
        let expectResult = "barcode";
        expect(result).toEqual(expectResult);
    });
    it("should return actionName", function () {
        let currentAction = "exchangeBarcode";
        let cmd = "2";
        let result = exchangeBarcodes.doAction(cmd);
        let expectResult = "init";
        expect(result).toEqual(expectResult);
    });
    it("should return actionName", function () {
        let currentAction = "exchangeBarcode";
        let cmd = "| ||::: |";
        spyOn(console, "log");
        let result = exchangeBarcodes.doAction(cmd);
        let expectResult = "exchangeBarcode";
        expect(result).toEqual(expectResult);
    });
    it("should end", function () {
        let currentAction = "exchangeBarcode";
        let cmd = "q";
        spyOn(console, 'log');
        spyOn(process, 'exit');
        let result = exchangeBarcodes.doAction(cmd);
        let expectResult = 0;
        expect(process.exit).toHaveBeenCalledWith(expectResult);
    });
});
