/**
 * Created by yuan on 8/1/16.
 */
/*global require*/
const Postcode = require('../../actions/PostcodeActions');
let action = new Postcode();

describe('Postcode', function () {
    it('test Postcode it should be return init', function () {
        let cmd = 'q';
        let expected = 'init';
        let result = action.doAction(cmd);
        expect(result).toEqual(expected);
    });

    it('test Postcode it should be return init', function () {
        let cmd = '| :::|| ||::: ::|:| :|::| :::|| ::|:| |';
        let expected = `postcode: 10241`;
        spyOn(console, 'log');
        action.doAction(cmd);
        expect(console.log).toHaveBeenCalledWith(expected);
    });
    it('test Postcode it should be return wrong with format', function () {
        let cmd = '| :::||* ||::: ::|:| |';
        let expected = `error: Your barcodes format wrong!`;
        spyOn(console, 'log');
        action.doAction(cmd);
        expect(console.log).toHaveBeenCalledWith(expected);
    });
    it('test Postcode it should be return wrong with format', function () {
        let cmd = '| :::|| ||::: ::|:|';
        let expected = `error: Your barcodes format wrong!`;
        spyOn(console, 'log');
        action.doAction(cmd);
        expect(console.log).toHaveBeenCalledWith(expected);
    });

    it('test Postcode it should be return wrong with length', function () {
        let cmd = '| :::|| ||::: ::|:|| |';
        let expected = `error: Your barcodes length wrong!`;
        spyOn(console, 'log');
        action.doAction(cmd);
        expect(console.log).toHaveBeenCalledWith(expected);
    });
    it('test Postcode it should be return init', function () {
        let cmd = '| :::||  ||:::  ::|:|  :|::|  :::||  |:|:: |';
        let expected = `error: Checkdigit wrong!`;
        spyOn(console, 'log');
        action.doAction(cmd);
        expect(console.log).toHaveBeenCalledWith(expected);
    });

});