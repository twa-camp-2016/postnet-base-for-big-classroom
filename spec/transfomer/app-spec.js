/**
 * Created by myc on 16-7-31.
 */
"use strict";

const initAction = require('../../transfomer/actions/initAction')
const postAction = require('../../transfomer/actions/postAction')
const barcodeAction = require('../../transfomer/actions/barcodeAction')

describe('initAction', function () {
    it('test initAction.doAction should return inputPost', function () {
        let cmd = '1';
        let expected = 'inputPost';
        let result = initAction.doAction(cmd);

        expect(result).toEqual(expected);
    });

    it('test initAction.doAction should return inputBarcode', function () {
        let cmd = '2';
        let expected = 'inputBarcode';
        let result = initAction.doAction(cmd);

        expect(result).toEqual(expected);
    });

    it('test initAction.doAction should return init', function () {
        let cmd = '43';
        let expected = 'init';
        spyOn(console, 'log');
        let exp = 'Invalidation Input';
        let result = initAction.doAction(cmd);

        expect(result).toEqual(expected);
        expect(console.log).toHaveBeenCalledWith(exp)
    });
});

describe('postAction', function () {
   it('test postAction.doAction should return init', function () {
       let cmd = 'q';
       let expected = 'init';
       let result = postAction.doAction(cmd);

       expect(result).toEqual(expected)
   });

    it('test postAction.doAction should output result and return inputPost 1 ', function () {
        let cmd = '12345';
        let expected = `12345=|:::||::|:|::||::|::|:|:|::|:|:|
5

`;
        spyOn(console, 'log');
        let result = postAction.doAction(cmd);

        expect(console.log).toHaveBeenCalledWith(expected)
    });

    it('test postAction.doAction should output error and return inputPost 2 ', function () {
        let cmd = '1234';
        let expected =`error

`;
        spyOn(console, 'log');
        let result = postAction.doAction(cmd);

        expect(console.log).toHaveBeenCalledWith(expected)
    });
});

describe('barcodeAction', function () {
   it('test barcodeAtcion.doAction should return init', function () {
       let cmd = 'q';
       let expected = 'init';
       let result = barcodeAction.doAction(cmd);

       expect(result).toEqual(expected)
   });

    it('test barcodeAtcion.doAction should output result and return inputBarcode 1 ', function () {
        let cmd = '| :::|| ::|:| ::||: :|::| :|:|: :|:|: |';
        let expected = 'inputBarcode';
        let result = barcodeAction.doAction(cmd);

        expect(result).toEqual(expected)
    });

    it('test barcodeAction.doAction should output result and return inputBarcode 2 ', function () {
        let cmd = '| :::|| ::|:| ::||: :|::| :|:|: :|:|: |';
        let expected = `12345
`;
        spyOn(console, 'log');
        let result = barcodeAction.doAction(cmd);

        expect(console.log).toHaveBeenCalledWith(expected)
    });

    it('test barcodeAction.doAction should output error and return inputBarcode 3 ', function () {
        let cmd = '1234';
        let expected =`error
`;
        spyOn(console, 'log');
        let result = barcodeAction.doAction(cmd);

        expect(console.log).toHaveBeenCalledWith(expected)
    });
});


