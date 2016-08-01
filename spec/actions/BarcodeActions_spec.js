/**
 * Created by yuan on 8/1/16.
 */
/*global require*/
const BarcodeAction = require('../../actions/BarcodeActions');
let action = new BarcodeAction();

describe('BarcodeAction', function () {
    it('test BarcodeAction it should be return init', function () {
        let cmd = 'q';
        let expected = 'init';
        let result = action.doAction(cmd);
        expect(result).toEqual(expected);
    });

    it('test BarcodeAction it should be return init', function () {
        let cmd = '10241';
        let expected =`barcode:| :::||||:::::|:|:|::|:::||::|:| |`;
        spyOn(console, 'log');
        action.doAction(cmd);
        expect(console.log).toHaveBeenCalledWith(expected);
    });
    it('test BarcodeAction it should be return init', function () {
        let cmd = '1024';
        let expected = `error: Length wrong!`;
        spyOn(console, 'log');
        action.doAction(cmd);
        expect(console.log).toHaveBeenCalledWith(expected);
    });

    it('test BarcodeAction it should be return init', function () {
        let cmd = '10*24';
        let expected = `error: Your input invalid!`
        spyOn(console, 'log');
        action.doAction(cmd);
        expect(console.log).toHaveBeenCalledWith(expected);
    });

});