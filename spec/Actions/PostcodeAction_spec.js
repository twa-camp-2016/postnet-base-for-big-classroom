/**
 * Created by tong on 16-8-2.
 */
'use strict';

const PostcodeAction = require('../../transformer/actions/PostcodeAction');

describe("PostcodeAction", function () {
  let postcodeAction = new PostcodeAction();

  it("input '1' expect 'input barcode'", function () {
    let input = '1';
    let expected = 'input barcode';

    expect(postcodeAction.doAction(input)).toEqual(expected);
  });

  it("input '2' expect 'init'", function () {
    let input = '2';
    let expected = 'init';

    expect(postcodeAction.doAction(input)).toEqual(expected);
  });

  it("input 'q' expect exit", function () {
    spyOn(process, 'exit');
    let input = 'q';

    postcodeAction.doAction(input);
    expect(process.exit).toHaveBeenCalledWith(0);
  });

  it("input other letter", function () {
    spyOn(console, 'log');
    let input = 'e';
    let expected = '无效的输入';

    postcodeAction.doAction(input);
    expect(console.log).toHaveBeenCalledWith(expected);
  });
});
