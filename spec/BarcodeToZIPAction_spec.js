'use strict';
/*global expect*/
let BarcodeToZIPAction = require('../Actions/Action.js');
describe('BarcodeToZIPAction', function () {
    let Zip;
    beforeEach(function () {
        Zip = new BarcodeToZIPAction();
        spyOn(BarcodeToZIPAction, 'doAction').and.callThrough();
    });
    describe('doAction', function () {
        it('should return to init when cmd is q', function () {
            let cmd = 'q';
            let expected = 'init';
            let result = BarcodeToZIPAction.doAction(cmd);
            expect(BarcodeToZIPAction.doAction).toHaveBeenCalledWith(cmd);
            expect(result).toEqual(expected);
        });
        it('return error', function () {
                spyOn(console, 'log');
                spyOn(console, 'log');
                let cmd = '| :|:|: :||:: |:::| :::|| ::|:| |:|:: ||';
                let result = BarcodeToZIPAction.doAction(cmd);
                expect(result).toEqual('init');
                expect(BarcodeToZIPAction.doAction).toHaveBeenCalledWith(cmd);
                expect(console.log).toHaveBeenCalledWith('result');
                expect(console.log).toHaveBeenCalledWith('input erroe');
            }
        )
        ;
        it('return barcode true', function () {
            spyOn(console, 'log');
            let cmd = '| :|:|: :||:: |:::| :::|| ::|:| |:|:: |';
            let zipcode = '56712';
            let result = BarcodeToZIPAction.doAction(cmd);
            expect(result).toEqual('init');
            expect(BarcodeToZIPAction.doAction).toHaveBeenCalledWith(cmd);
            expect(console.log).toHaveBeenCalledWith('result: ');
            expect(console.log).toHaveBeenCalledWith(`zipcode:`);
        });
    })
});