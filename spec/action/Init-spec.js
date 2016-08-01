"use strict";

const InitActions = require("../../action/InitActions.js");
describe("init", function () {
    let initAction = new InitActions();
    it("should return postCode ", function () {
        let cmd = "1";
        let result = initAction.doAction(cmd);
        expect(result).toEqual("postcode");
    });
    it("should return barcode ", function () {
        let cmd = "2";
        let result = initAction.doAction(cmd);
        expect(result).toEqual("barcode");
    });
    it("should return quit ", function () {
        spyOn(process, "exit");
        let cmd = "q";
        initAction.doAction(cmd);
        expect(process.exit).toHaveBeenCalled();
    });

});

