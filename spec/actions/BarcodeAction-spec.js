
'use strict';
const BarcodeAction = require('../../postApp/actions/BarcodeAction');
describe('barcode', ()=> {
    let barcodeAction = new BarcodeAction();
   it("should return barcode", function () {
        spyOn(console, "log");
        let cmd = "|:::||::|:|::||::|::|:|:|::|:|:|";
        const barcoderesult={ success: true, value:'12345'}
        let result = barcodeAction.doAction(cmd);
        let expectResult = "barcode";
        expect(result).toEqual(expectResult);
        expect(console.log).toHaveBeenCalledWith(barcoderesult.value);
    });
    it("should return barcode", function () {
        let cmd = "3";
        spyOn(console, 'log');
        let result = barcodeAction.doAction(cmd);
        let expectResult = "barcode";
        expect(result).toEqual(expectResult);
    });
    it("should return init", function () {
        let cmd = "r";
        let result = barcodeAction.doAction(cmd);
        let expectResult = "init";
        expect(result).toEqual(expectResult);
    });
    it("should to end", function () {
        let cmd = "q";
        spyOn(console, 'log');
        spyOn(process, 'exit');
        let result = barcodeAction.doAction(cmd);
        let expectResult = 0;
        expect(process.exit).toHaveBeenCalledWith(expectResult);
    });
});