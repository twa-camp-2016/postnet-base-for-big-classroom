'use strict';
const BarcodeAction = require('../actions/BarcodeAction');
describe("barcode", ()=> {
    let barcode;
    beforeEach(()=> {
        barcode = new BarcodeAction();
    });

    it("should return postcode", ()=> {
        let cmd = "| |:|:: :|:|: |:::| :::|| ::||: :|:|: |";
        spyOn(console,"log");
        let result = barcode.doAction(cmd);
        expect(console.log).toHaveBeenCalledWith('I\'m converting the barcode: ' + cmd + "\n" +
            'This is the correct postcode: ' + 957135);
    });
    it("should return init", ()=> {
        let cmd = 'q';
        let result = barcode.doAction(cmd);
        expect(result).toEqual('init');
    });
    it("should return error", ()=> {
        let cmd = "| |:|*: :|:|: |:::| :::|| ::||: :|:|: |";
        spyOn(console,"log");
        let result = barcode.doAction(cmd);
        expect(console.log).toHaveBeenCalledWith("This barcode is error!");
    });
});
