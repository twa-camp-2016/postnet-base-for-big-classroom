/**
 * Created by afaren on 7/29/16.
 */
'use strict';
const BarcodeAction = require('../../src/actions/BarcodeAction');


describe('BarcodeAction', () => {
  let barcodeAction;
  beforeEach(() => {
    barcodeAction = new BarcodeAction();
    spyOn(barcodeAction, 'doAction').and.callThrough();
  });
  describe('doAction', () => {
    it(`should return to init when cmd is ${'q'}`, () => {
      const cmd = 'q';
      const expected = 'init';
      const actual = barcodeAction.doAction(cmd);

      expect(barcodeAction.doAction).toHaveBeenCalledWith(cmd);
      expect(actual).toEqual(expected);
    });
    it(`should return error message when input barcode is illegal`, () => {
      spyOn(console, 'log');

      const cmd = '| :::|| ::|:| :::|| ::|:| :::|| ***** |';
      const actual = barcodeAction.doAction(cmd);

      expect(actual).toEqual('init');
      expect(barcodeAction.doAction).toHaveBeenCalledWith(cmd);
      expect(console.log).toHaveBeenCalledWith('result: ');
      expect(console.log).toHaveBeenCalledWith('error message: illegal barcode');
    });
    it(`should return translation of input barcode`, () => {
      spyOn(console, 'log');

      const cmd = '| :::|| ::|:| :::|| ::|:| :::|| ::||: |';
      const zipcode = '12121';
      const actual = barcodeAction.doAction(cmd);

      expect(actual).toEqual('init');
      expect(barcodeAction.doAction).toHaveBeenCalledWith(cmd);
      expect(console.log).toHaveBeenCalledWith('result: ');
      expect(console.log).toHaveBeenCalledWith(`<--  ${zipcode}`);
    });

  })
});