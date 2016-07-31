'use strict';

const postcodeAndBarcode = require("../../postcodeAndBarcode/postcodeAndBarcodeCore.js");
describe('test postcodeTurnBarcode', function () {
    it('get true', function () {
        let input = '95723-24568';
        let result = postcodeAndBarcode.judge1(input);
        expect(result).toEqual('wrong input');
    });
    it('get true', function () {
        let input = '9572';
        let result = postcodeAndBarcode.judge1(input);
        expect(result).toEqual('wrong input');
    });

    it('get true', function () {
        let input = '95725-8983';
        let result = postcodeAndBarcode.judge1(input);
        expect(result).toEqual('95725-8983');
    });
    it('get true', function () {
        let input = '957-258983';
        let result = postcodeAndBarcode.judge1(input);
        expect(result).toEqual('wrong input');
    });
    it('get true', function () {
        let input = '9572*58983';
        let result = postcodeAndBarcode.judge1(input);
        expect(result).toEqual('wrong input');
    });

    it('get splitNum', function () {
        let input = '45056-2314';
        let result = postcodeAndBarcode.splitNums(input);
        expect(result).toEqual(['4', '5', '0', '5', '6', '2', '3', '1', '4']);
    });

    it('get splitNum', function () {
        let input = '45056';
        let result = postcodeAndBarcode.splitNums(input);
        expect(result).toEqual(['4', '5', '0', '5', '6']);
    });

    it('get checkCodes', function () {
        let splitNum = ['4', '5', '1', '4', '6', '1', '2', '1', '4'];
        let result = postcodeAndBarcode.getCheckCodes(splitNum);
        expect(result).toEqual([4, 5, 1, 4, 6, 1, 2, 1, 4, 2]);
    });

    it('get checkCodes', function () {
        let splitNum = ['4', '5', '1', '4', '5'];
        let result = postcodeAndBarcode.getCheckCodes(splitNum);
        expect(result).toEqual([4, 5, 1, 4, 5, 1]);
    });

    it('get checkCodes', function () {
        let splitNum = ['4', '5', '1', '5', '5'];
        let result = postcodeAndBarcode.getCheckCodes(splitNum);
        expect(result).toEqual([4, 5, 1, 5, 5, 0]);
    });

    it('get codes', function () {
        let checkCodes = [4, 5, 1, 4, 5, 1];
        let allCodes = ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let result = postcodeAndBarcode.matchInput(checkCodes, allCodes);
        expect(result).toEqual([':|::|', ':|:|:', ':::||', ':|::|', ':|:|:', ':::||']);

    });

    it('get codes', function () {
        let checkCodes = [4, 6, 4, 6, 3, 7];
        let allCodes = ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let result = postcodeAndBarcode.matchInput(checkCodes, allCodes);
        expect(result).toEqual([':|::|', ':||::', ':|::|', ':||::', '::||:', '|:::|']);

    });


    it('get result', function () {
        let codes = ['::|:|', '::|:|', '::|:|', '::|:|', '::|:|', ':|:|:', ':|:|:', ':|:|:', ':|:|:', ':|:|:'];
        let result = postcodeAndBarcode.getStr(codes);
        expect(result).toEqual('| ::|:| ::|:| ::|:| ::|:| ::|:| :|:|: :|:|: :|:|: :|:|: :|:|: |');
    });
});
describe('test barcodeTurnPostcode', function () {
    it('get true', function () {
        let codes = '|   |:|::   :|:|:   |:::|   :::||   ::||:   :|:|:   |';
        let result = postcodeAndBarcode.isValue(codes);
        expect(result).toEqual(true);
    });

    it('get true', function () {
        let codes = '|   q|:|::   :|:|:   |:::|   :::||   ::||:   :|:|:   |';
        let result = postcodeAndBarcode.isValue(codes);
        expect(result).toEqual(false);
    });


    it('get true', function () {
        let codes = '|q|:|:: :|:|: |:::| :::|| ::||: :|:|: |';
        let result = postcodeAndBarcode.hasFrame(codes);
        expect(result).toEqual(false);
    });

    it('get true', function () {
        let codes = '| |:|:: :|:|: |:::| :::|| ::||: :|:|: |';
        let result = postcodeAndBarcode.hasFrame(codes);
        expect(result).toEqual(true);
    });

    it('get splitCode', function () {
        let codes = '| |:|:: :|:|: |:::| :::|| ::||: :|:|: |';
        let result = postcodeAndBarcode.splitCodes(codes);
        expect(result).toEqual(['|:|::', ':|:|:', '|:::|', ':::||', '::||:', ':|:|:']);
    });

    it('get nums', function () {
        let splitCode = ['::|:|', '::|:|', '::|:|', '::|:|', '::|:|', ':|:|:', ':|:|:', ':|:|:', ':|:|:', ':|:|:'];
        let allCodes = ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let result = postcodeAndBarcode.matchNums(splitCode, allCodes);
        expect(result).toEqual([2, 2, 2, 2, 2, 5, 5, 5, 5, 5]);
    });

    it('get num', function () {
        let nums = [2, 2, 2, 2, 2, 5, 5, 5, 5];
        let result = postcodeAndBarcode.getInspectionCode(nums);
        expect(result).toEqual([2, 2, 2, 2, 2, 5, 5, 5]);
    });

    it('get num', function () {
        let nums = [4, 6, 6, 4, 5, 5];
        let result = postcodeAndBarcode.getInspectionCode(nums);
        expect(result).toEqual([4, 6, 6, 4, 5]);
    });

    it('get result', function () {
        let nums = [4, 5, 1, 4, 6, 1, 3, 2, 1];
        let result = postcodeAndBarcode.getFinalNum(nums);
        expect(result).toEqual('45146-1321');
    });
});
