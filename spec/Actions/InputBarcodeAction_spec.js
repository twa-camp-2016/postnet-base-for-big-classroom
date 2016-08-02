/**
 * Created by tong on 16-8-2.
 */
'use strict';

const InputBarcodeAction = require('./../../transformer/actions/InputBarcodeAction');

describe("InputBarcodeAction", function () {
  let inputBarcodeAction = new InputBarcodeAction();

  it("input 'q' to 'barcodeToPostcode'", function () {
    let input = 'q';
    let expected = 'barcodeToPostcode';

    expect(inputBarcodeAction.doAction(input)).toEqual(expected);
  });

  it("input the barcode and return the correct result", function () {
    spyOn(console, 'log');

    let input = '| :::|| ::|:| ::||: :|::| :|:|: :|:|: |';
    let expected = 'input barcode';
    let expectString = {
      error: '',
      data: '12345'
    };

    expect(inputBarcodeAction.doAction(input)).toEqual(expected);
    expect(console.log).toHaveBeenCalledWith('The result is:');
    expect(console.log).toHaveBeenCalledWith(expectString);
  });

  it("input the barcode and return error info", function () {
    spyOn(console, 'log');

    let input = '| :::*| ::|:| ::||: :|::| :|:|: :|:|: |';
    let expected = 'input barcode';
    let expectString = {
      error: "error input(only '|'':'' 'can be accepted and ' 'is must)",
      data: ''
    };

    expect(inputBarcodeAction.doAction(input)).toEqual(expected);
    expect(console.log).toHaveBeenCalledWith('The result is:');
    expect(console.log).toHaveBeenCalledWith(expectString);
  });
});