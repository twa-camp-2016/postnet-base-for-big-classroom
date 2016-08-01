/**
 * Created by tong on 16-8-2.
 */
'use strict';
const BarcodeAction = require('../../transformer/actions/BarcodeAction');

describe("BarcodeAction", function () {
  let barcodeAction = new BarcodeAction();

  it("input '1' ecpect 'input postcode'", function () {
    let input = '1';
    let expected = 'input postcode';

    expect(barcodeAction.doAction(input)).toEqual(expected);
  });

  it("input '2' expect 'init", function () {
    let input = '2';
    let expected = 'init';

    expect(barcodeAction.doAction(input)).toEqual(expected);
  });

  it("input 'q' ecpect exit", function () {
    spyOn(process, 'exit');
    let input = 'q';

    barcodeAction.doAction(input);
    expect(process.exit).toHaveBeenCalledWith(0);
  });

  it("input other letter", function () {
    spyOn(console, 'log');
    let input = 'e';
    let expected = '无效的输入';

    barcodeAction.doAction(input);
    expect(console.log).toHaveBeenCalledWith(expected);
  });
});