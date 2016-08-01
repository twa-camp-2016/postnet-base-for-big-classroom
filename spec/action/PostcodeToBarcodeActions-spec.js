"use strict";
const PostcodeToBarcodeActions = require("../../action/PostcodeToBarcodeActions");
describe('', function () {
    let postcodeToBarcodeActions = new PostcodeToBarcodeActions();
    it("should return postCode", function () {
        let cmd = "12345";
        let result = postcodeToBarcodeActions.doAction(cmd);
        expect(result).toEqual("postcode");
    });
});

