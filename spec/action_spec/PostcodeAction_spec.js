/**
 * Created by shiyue on 16-8-1.
 */
'use strict';

const PostcodeAction = require('../../src/actions/PostcodeAction');
describe('postcodeAction', function () {
    let postcodeAction;
    beforeEach(()=>postcodeAction = new PostcodeAction());

    it('back', function () {
        let cmp = 'b';
        let expected = 'init';
        expect(postcodeAction.doAction(cmp)).toEqual(expected);
    });

    it('postcode length is not 5/9/10', function () {
        spyOn(console, "log");
        let cmp = '1234';
        expect(postcodeAction.doAction(cmp)).toEqual('postcode');
        expect(console.log).toHaveBeenCalledWith('the barcode is ERR:the input is illegal!V_V');
    });

    it('postcode has other char', function () {
        let cmp = '1235a';
        spyOn(console, 'log');
        expect(postcodeAction.doAction(cmp)).toEqual('postcode');
        expect(console.log).toHaveBeenCalledWith('the barcode is ERR:the input is illegal!V_V');
    });

    it('postcode - is not correct', function () {
        let cmp = '1234-51234';
        spyOn(console, 'log');
        expect(postcodeAction.doAction(cmp)).toEqual('postcode');
        expect(console.log).toHaveBeenCalledWith('the barcode is ERR:the input is illegal!V_V');
    });

    it('postcode correct', function () {
        let cmp = '12345';
        spyOn(console, 'log');
        expect(postcodeAction.doAction(cmp)).toEqual('postcode');
        expect(console.log).toHaveBeenCalledWith('the barcode is | :::||::|:|::||::|::|:|:|::|:|: |');
    });
});
