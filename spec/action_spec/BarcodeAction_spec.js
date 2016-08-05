'use strict';

const BarcodeAction = require('../../src/actions/BarcodeAction');

describe('BarcodeAction', function () {
    let barcodeAction;

    beforeEach(()=>
        barcodeAction = new BarcodeAction()
    );

    it('back', function () {
        let cmp = 'b';
        let expected = 'init';
        expect(barcodeAction.doAction(cmp)).toEqual(expected);
    });
    
    it('input false barcode', function () {
        spyOn(console, "log");
        let cmp = '| |*||| |:::| |';
        let expected = 'barcode';
        let result = 'the postcode is ERR:the input is illegal!V_V'
        expect(barcodeAction.doAction(cmp)).toEqual(expected);
        expect(console.log).toHaveBeenCalledWith(result);
    });

    it('input true barcode', function () {
        spyOn(console, 'log');
        let cmp = '| ||::: ';
        let expected = 'barcode';
        let result = 'the postcode is ERR:the input is illegal!V_V';
        expect(barcodeAction.doAction(cmp)).toEqual(expected);
        expect(console.log).toHaveBeenCalledWith(result);
    });

    it('input true barcode', function () {
        spyOn(console, 'log');
        let cmp = '| |::| :||:: |';
        let expected = 'barcode';
        let result = 'the postcode is ERR:the input is illegal!V_V';
        let action = barcodeAction.doAction(cmp);
        expect(action).toEqual(expected);
        expect(console.log).toHaveBeenCalledWith(result);
    });

    it('input true barcode', function () {
        spyOn(console, 'log');
        let cmp = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        let expected = 'barcode';
        let result = 'the postcode is 45056-1234\ncd:0';
        expect(barcodeAction.doAction(cmp)).toEqual(expected);
        expect(console.log).toHaveBeenCalledWith(result);
    });
});