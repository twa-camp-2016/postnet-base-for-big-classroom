/**
 * Created by ritter on 16-7-28.
 */
"use strict";

const PostToBarcode = require("../../transfomer/PostToBarcode");

describe('postToBartags', function () {
    let postToBarcode;

    beforeEach(()=>{
        postToBarcode = new PostToBarcode()
    });

    it("should return barcode 1 ", function () {
        let tags = "45056-1234";
        let result = postToBarcode.changePost(tags);
        let expected = "45056-1234=|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|\n0";
        expect(result).toEqual(expected);
    });

    it("should return barcode 2 ", function () {
        let tags = "450-561234";
        let result = postToBarcode.changePost(tags);
        let expected = "error";
        expect(result).toEqual(expected);
    });

    it("should return barcode 3 ", function () {
        let tags = "450";
        let result = postToBarcode.changePost(tags);
        let expected = "error";
        expect(result).toEqual(expected);
    });

    it("should return barcode 4 ", function () {
        let tags = "45*";
        let result = postToBarcode.changePost(tags);
        let expected = "error";
        expect(result).toEqual(expected);
    });

    it("should return barcode 5 ", function () {
        let tags = "450561234";
        let result = postToBarcode.changePost(tags);
        let expected = "450561234=|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|\n0";
        expect(result).toEqual(expected);
    });

    it("should return barcode 6 ", function () {
        let tags = "45056";
        let result = postToBarcode.changePost(tags);
        let expected = "45056=|:|::|:|:|:||::::|:|::||::||:::|\n0";
        expect(result).toEqual(expected);
    });

});
