/**
 * Created by lucky on 16-8-1.
 */
'use strict';

const InitAction = require("../../actions/InitAction");

describe("initAction", function () {
    let initAction;
    beforeEach(()=> {
        initAction = new InitAction();
    });

    it("if input '1' should output barcode", function () {
        let cmd = '1';
        let outputAndQuit = jasmine.createSpy("spy");
        let currentName = {value: 'barcode'};
        initAction.doAction(cmd, outputAndQuit, currentName);
        expect(outputAndQuit).toHaveBeenCalledWith('please input barcode(press q to quit):');
    });

    it("if input '2' should go to outputAndQuit", function () {
        let cmd = '2';
        let outputAndQuit = jasmine.createSpy("spy");
        let currentName = {value: 'data'};
        initAction.doAction(cmd, outputAndQuit, currentName);
        expect(outputAndQuit).toHaveBeenCalledWith('please input data(press q to quit):');
    });

    it("if input '3' should exit", function () {
        let cmd = '3';
        let outputAndQuit = jasmine.createSpy("spy");
        let currentName = {value: ''};
        spyOn(process, "exit");
        initAction.doAction(cmd, outputAndQuit, currentName);
        expect(outputAndQuit).toHaveBeenCalledWith('GoodBye');
        expect(process.exit).toHaveBeenCalled();
    });

    it("if input others should try again", function () {
        let cmd = '4';
        let outputAndQuit = jasmine.createSpy("spy");
        let currentName = {value: ''};
        initAction.doAction(cmd, outputAndQuit, currentName);
        expect(outputAndQuit).toHaveBeenCalledWith('------Input error,try again--------');
    });
});