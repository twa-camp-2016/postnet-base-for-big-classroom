/**
 * Created by afaren on 7/29/16.
 */
'use strict';
const ZipcodeAction = require('../../src/actions/ZipcodeAction');


describe('ZipcodeAction', () => {
  let zipcodeAction;
  beforeEach(() => {
    zipcodeAction = new ZipcodeAction();
    spyOn(zipcodeAction, 'doAction').and.callThrough();
  });
  describe('doAction', () => {
    it(`should return to init when cmd is ${'q'}`, () => {
      const cmd = 'q';
      const expected = 'init';
      const actual = zipcodeAction.doAction(cmd);

      expect(zipcodeAction.doAction).toHaveBeenCalledWith(cmd);
      expect(actual).toEqual(expected);
    });
    it(`should return error message when input illegal zipcode`, () => {
      spyOn(console, 'log');

      const cmd = '121211';
      const actual = zipcodeAction.doAction(cmd);

      expect(actual).toEqual('init');
      expect(zipcodeAction.doAction).toHaveBeenCalledWith(cmd);
      expect(console.log).toHaveBeenCalledWith('result: ');
      expect(console.log).toHaveBeenCalledWith('error message: length is illegal');
    });
    it(`should return translation of input zipcode`, () => {
      spyOn(console, 'log');

      const barcode = '| :::|| ::|:| :::|| ::|:| :::|| ::||: |';
      const cmd = '12121';
      const actual = zipcodeAction.doAction(cmd);

      expect(actual).toEqual('init');
      expect(zipcodeAction.doAction).toHaveBeenCalledWith(cmd);
      expect(console.log).toHaveBeenCalledWith('result: ');
      expect(console.log).toHaveBeenCalledWith(`<--  ${barcode}`);
    });

  })
});