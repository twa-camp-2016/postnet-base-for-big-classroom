"use strict";
const PostcodeActions = require("../../action/PostcodeActions");
describe("postCodeActions", function () {
    let postCodeActions = new PostcodeActions();
    it("should return postCodeToBarcode", function () {
        let cmd = "1";
        let result = postCodeActions.doAction(cmd);
        expect(result).toEqual("postcodeToBarcode");
    });
    it("should return postCodeToBarcode", function () {
        let cmd = "2";
        let result = postCodeActions.doAction(cmd);
        expect(result).toEqual("init");
    });
    it("should return quit ", function () {
        spyOn(process, "exit");
        let cmd = "q";
        postCodeActions.doAction(cmd);
        expect(process.exit).toHaveBeenCalled();
    });
});


