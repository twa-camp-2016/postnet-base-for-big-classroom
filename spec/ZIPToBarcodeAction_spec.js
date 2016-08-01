/**
 * Created by wt on 16-8-1.
 */
'use strict';
/*global expect*/
let BarcodeToZIPAction = require('../Actions/Action.js');
describe('ZIPToBarcodeAction', function () {
    let zipAction;
    beforeEach(function () {
        zipAction = new ZIPToBarcodeAction();
        spyOn(zipAction, 'doAction').and.callThrough();
    });
    describe('doAction', function () {
        it('return to the up level', function () {
            const cmd = 'q';
            const expected = 'init';
            const result = zipAction.doAction(cmd);
            expect(zipAction.doAction).toHaveBeenCalledWith(cmd);
            expect(result).toEqual(expected);
        });
        it('return input error', function () {

            spyOn(console, 'log');
            const cmd = '627829';
            const result = zipAction.doAction(cmd);
            expect(result).toEqual('init');
            expect(zipAction.doAction).toHaveBeenCalledWith(cmd);
            expect(console.log).toHaveBeenCalledWith('result: ');
            expect(console.log).toHaveBeenCalledWith('error message: length is illegal');
        });
        it('return true change zip to Barcode', function () {
            spyOn(console, 'log');
            const barcode = '| :|:|: :||:: |:::| |::|: :::|| ::||: |';
            const cmd = '56781';
            const result = zipAction.doAction(cmd);
            expect(result).toEqual('init');
            expect(zipAction.doAction).toHaveBeenCalledWith(cmd);
            expect(console.log).toHaveBeenCalledWith('result:');
            expect(console.log).toHaveBeenCalledWith('barcode:');
        });
    })
});