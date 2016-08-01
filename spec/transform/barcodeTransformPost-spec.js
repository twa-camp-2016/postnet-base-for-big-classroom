'use strict';
const barcode = require('../../transform/BarcodeTransformPost.js');

let barcodeToPost = new barcode();

describe("BarcodeTransformPost", function () {
    it("return result", function () {
        let example = '| |:|:: |:::| |:|:: |:::| ::||: ::|:| |';
        let items = ['||:::', ':::||',
            '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let result = barcodeToPost.BarcodeTransformPost(example);
        let expected = `97973
cd is:5`;
        expect(result).toEqual(expected);
    });

    it("return the error of the not find", function () {
        let example = '| |:|:: |:::| |:|:: |:::| ::||: |:|:| |';
        let result = barcodeToPost.BarcodeTransformPost(example);
        let expected = `the each number > 9 or the exampleString is not correct`;
        expect(result).toEqual(expected);
    });

    it("should return the not have right char", function () {
        let example = 'sss';
        let items = ['||:::', ':::||',
            '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let result = barcodeToPost.BarcodeTransformPost(example);
        let expected = `the input is have not correct input`;
        expect(result).toEqual(expected);
    });

    it("should return  the each barcode not five char", function () {
        let example = '| |||||| ||||:: |:: |';
        let items = ['||:::', ':::||',
            '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let result = barcodeToPost.BarcodeTransformPost(example);
        let expected = `the barcode is not five char`;
        expect(result).toEqual(expected);
    });

    it("the barcode have not frame", function () {
        let example = ':| ||||| |:';
        let items = ['||:::', ':::||',
            '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let result = barcodeToPost.BarcodeTransformPost(example);
        let expected = `the barcode have not frame`;
        expect(result).toEqual(expected);
    });

    it("the barcode'length is not valid", function () {
        let example = '| |:::| ||::: |:::: |::|| |';
        let items = ['||:::', ':::||',
            '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let result = barcodeToPost.BarcodeTransformPost(example);
        let expected = `the barcode length is not valid`;
        expect(result).toEqual(expected);
    });
});