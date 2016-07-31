/**
 * Created by ritter on 16-7-28.
 */
"use strict";

const BarcodeToPost = require("../../transfomer/barcodeToPost");

describe('barcodeToPost', function () {

    let barcodeToPost;

    beforeEach(()=> {
        barcodeToPost = new BarcodeToPost();
    })

    it("should return a postcode 1 ", function () {
        let barcodes = "| :*";
        let result = barcodeToPost.changeBarcode(barcodes);
        let expected = "error";
        expect(result).toEqual(expected);
    });

    it("should return a postcode 3 ", function () {
        let barcodes = "| :::|| ||::: |";
        let result = barcodeToPost.changeBarcode(barcodes);
        let expected = "error";
        expect(result).toEqual(expected);
    });

    it("should return a postcode 5 ", function () {
        let barcodes = "| |:|:: :|:|: |:::| :::|| ::||: :|:|: |";
        let result = barcodeToPost.changeBarcode(barcodes);
        let expected = "95713";
        expect(result).toEqual(expected);
    });

    it("should return a postcode 6 ", function () {
        let barcodes = "| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |";
        let result = barcodeToPost.changeBarcode(barcodes);
        let expected = "45056-1234";
        expect(result).toEqual(expected);
    });
});