/**
 * Created by lucky on 16-8-1.
 */
'use strict';

const ZipCodesAction=require("../../actions/ZipCodesAction");
describe("zipCodeAction",function () {
   let zipCodeAction;
    beforeEach(()=>{
        zipCodeAction=new ZipCodesAction();
    });

    fit("if input 'q' should go to menu", function () {
        let cmd = 'q';
        let outputAndQuit = jasmine.createSpy("spy");
        let currentName = {value: 'barcode'};
        zipCodeAction.doAction(cmd, outputAndQuit, currentName);
        expect(outputAndQuit).toHaveBeenCalledWith("What is your choice,now?");
    });
});