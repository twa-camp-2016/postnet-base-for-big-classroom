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
    let expected = '{"error":"","data":"|:::||::|:|::||::|::|:|:|::|:|:| cd is 5"}';

    expect(inputPostcodeAction.doAction(input)).toEqual('inputpostcode');
    expect(console.log).toHaveBeenCalledWith(expected);
  });

  it("input the postcode return the wrong info", function(){
    spyOn(console, 'log');

    let input = '1234578906';
    let expected = `{"error":"the letter or the length of number is illegal(the length should be 5/9/10 contain' - ')","data":""}`;

    expect(inputPostcodeAction.doAction(input)).toEqual('inputpostcode');
    expect(console.log).toHaveBeenCalledWith(expected);
  });
});