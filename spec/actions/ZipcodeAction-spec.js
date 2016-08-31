/**
 * Created by wangqi on 16-8-1.
 */
'use strict';
const ZipcodeAction = require('../../postApp/actions/ZipcodeAction');
describe("zipcode", ()=> {
    let zipcode = new ZipcodeAction();

    it("should return zipcode", function () {
        spyOn(console, "log");
        let cmd = "12345";
        const zipcoderesult = {success: true, data: '| :::|| ::|:| ::||: :|::| :|:|: :|:|: |'};
        let result = zipcode.doAction(cmd);
        let expectResult = "zipcode";
        expect(result).toEqual(expectResult);
        expect(console.log).toHaveBeenCalledWith(zipcoderesult.data);
    });
    it("should return init", ()=> {
        let cmd = "r";
        let result = zipcode.doAction(cmd);
        let expectResult = "init";
        expect(result).toEqual(expectResult);
    });
    it("should return zipcode", ()=> {
        let cmd = "3";
        spyOn(console, 'log');
        let result = zipcode.doAction(cmd);
        let expectResult = "zipcode";
        expect(result).toEqual(expectResult);
    });
    it("should to end", ()=> {
        let cmd = "q";
        spyOn(console, 'log');
        spyOn(process, 'exit');
        let result = zipcode.doAction(cmd);
        let expectResult = 0;
        expect(process.exit).toHaveBeenCalledWith(expectResult);
    });
});
