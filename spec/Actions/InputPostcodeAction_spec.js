/**
 * Created by tong on 16-8-2.
 */
'use strict';

const InputPostcodeAction = require('../../transformer/actions/InputPostcodeAction');

describe("InputPostcodeAction", function () {
  let inputPostcodeAction = new InputPostcodeAction();

  it("intput 'q' expect 'postcodeToBarcode'", function () {
    let input = 'q';
    let expected = 'postcodeToBarcode';

    expect(inputPostcodeAction.doAction(input)).toEqual(expected);
  });

  it("intput the postcode return the correct result", function () {
    spyOn(console, 'log');

    let input = '12345';
    let cd = 5;
    let expected = {
      error: '',
      data: "|:::||::|:|::||::|::|:|:|::|:|:|\n" + 'cd is ' + cd
    };

    expect(inputPostcodeAction.doAction(input)).toEqual('input postcode');
    expect(console.log).toHaveBeenCalledWith('The result is:');
    expect(console.log).toHaveBeenCalledWith(expected);
  });
});