/**
 * Created by wangqi on 16-8-1.
 */
'use strict';
const BarcodeAction = require("../../postApp/actions/BarcodeAction");
describe('barcode',() => {
    let barcodeAction = new BarcodeAction();

    it("should return barcode",() => {
        spyOn(console,"log");
        let cmd = "| :::|| ::|:| ::||: :|::| :|:|: :|:|: |";
        let barcoderesult = {success:true,data:"12345"};
        let result = BarcodeAction.doAction(cmd);
        let expectResult = "barcode";
        expect(result).toEqual(expectResult);
        expect(console.log).toHaveBeenCalledWith(barcoderesult.data);
    });
    it("should return barcode", ()=> {
        let cmd = "3";
        spyOn(console, 'log');
        let result = barcodeAction.doAction(cmd);
        let expectResult = "barcode";
        expect(result).toEqual(expectResult);
    });
    it("should return init", ()=> {
        let cmd = "r";
        let result = barcodeAction.doAction(cmd);
        let expectResult = "init";
        expect(result).toEqual(expectResult);
    });
    it("should to end", ()=> {
        let cmd = "q";
        spyOn(console, 'log');
        spyOn(process, 'exit');
        let result = barcodeAction.doAction(cmd);
        let expectResult = 0;
        expect(process.exit).toHaveBeenCalledWith(expectResult);
    });
});

