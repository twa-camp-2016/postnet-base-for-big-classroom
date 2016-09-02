'use strict';

const BarcodesAction = require("../../actions/BarcodesAction");

describe("barcode", function () {

    let barcode;
    beforeEach(()=> {
        barcode = new BarcodesAction();
    });


    fit("if input 'q' should go to menu", function () {
        let cmd = 'q';
        let outputAndQuit = jasmine.createSpy("spy");
        let currentName = {value: 'barcode'};
        barcode.doAction(cmd, outputAndQuit, currentName);
        expect(outputAndQuit).toHaveBeenCalledWith("What is your choice,now?");
    });
});
