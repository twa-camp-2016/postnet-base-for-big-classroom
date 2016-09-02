/**
 * Created by tong on 16-8-1.
 */
'use strict';
const InitAction = require('../../transformer/actions/InitAction');

describe("InitAction", function () {
  let initAction = new InitAction();

  it("input '1' expect 'postcodeToBarcode'", function () {
    let input = '1';
    let expected = 'postcodeToBarcode';

    expect(initAction.doAction(input)).toEqual(expected);
  });

  it("input '2' expect 'barcodeToPostcode'", function () {
    let input = '2';
    let expected = 'barcodeToPostcode';

    expect(initAction.doAction(input)).toEqual(expected);
  });

  it("input 'q' expect exit", function () {
    let input = 'q';
    spyOn(process, 'exit');
    initAction.doAction(input);

    expect(process.exit).toHaveBeenCalledWith(0);
  });

  it("input other letter", function () {
    let input = 'a';
    let expected1 = 'init';

    spyOn(console, 'log');
    let expected2 = '无效的输入';

    expect(initAction.doAction(input)).toEqual(expected1);
    expect(console.log).toHaveBeenCalledWith(expected2);
  })
});
