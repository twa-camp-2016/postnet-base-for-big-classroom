/**
 * Created by wangqi on 16-8-1.
 */
'use strict';
const InitAction = require('../../postApp/actions/InitAction');
describe("init", ()=> {
    let initAction = new InitAction();
    it("should return zipcode", function () {
        let cmd = "1";
        let result = initAction.doAction(cmd);
        let expectResult = "zipcode";
        expect(result).toEqual(expectResult);
    });
    it("should return barcode", ()=> {
        let cmd = "2";
        let result = initAction.doAction(cmd);
        let expectResult = "barcode";
        expect(result).toEqual(expectResult);
    });
    it("should to end", ()=> {
        let cmd = "3";
        spyOn(console, 'log');
        spyOn(process, 'exit');
        let result = initAction.doAction(cmd);
        let expectResult = 0;
        expect(process.exit).toHaveBeenCalledWith(expectResult);
    });
    it("should return init", ()=> {
        let cmd = "5";
        spyOn(console, 'log');
        let result = initAction.doAction(cmd);
        let expectResult = "init";
        expect(result).toEqual(expectResult);
    });
});