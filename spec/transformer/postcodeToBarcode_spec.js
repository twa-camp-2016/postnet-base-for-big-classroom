'use strict';
/**
 * Created by tong on 16-7-28.
 */
const PostcodeToBarcode = require("../../transformer/core/PostcodeToBarcode.js");

//postcode to barcode
describe("transferToBarcode", function () {
  let theCall;

  beforeEach(()=> {
    theCall = new PostcodeToBarcode();
  });

  it("postCode transformer to barcode", function () {
    let input = "12345-1234";
    let check = 5;
    let expected = {
      error: '',
      data: "|:::||::|:|::||::|::|:|:|::::||::|:|::||::|::|:|:|:|" + " cd is " + check
    };

    expect(theCall.transferToBarcode(input)).toEqual(expected);
  });

  it("postCode transformer to barcode", function () {
    let input = "123451234";
    let expected = {
      error: '',
      data: "|:::||::|:|::||::|::|:|:|::::||::|:|::||::|::|:|:|:|" + " cd is 5"
    };

    expect(theCall.transferToBarcode(input)).toEqual(expected);
  });

  it("postCode transformer to barcode", function () {
    let input = "12345";
    let check = 5;
    let expected = {
      error: '',
      data: "|:::||::|:|::||::|::|:|:|::|:|:|" + " cd is " + check
    };

    expect(theCall.transferToBarcode(input)).toEqual(expected);
  });

  it("check the number format_length", function () {
    let input = "1234";
    let expected = {
      error: "the letter or the length of number is illegal(the length should be 5/9/10 contain' - ')",
      data: ''
    };

    expect(theCall.transferToBarcode(input)).toEqual(expected);
  });

  it("check the number format_letter", function () {
    let input = "1234a1234";
    let expected = {
      error: "the letter or the length of number is illegal(the length should be 5/9/10 contain' - ')",
      data: ''
    };

    expect(theCall.transferToBarcode(input)).toEqual(expected);
  });

  it("check the number format_position", function () {
    let input = "123-41234";
    let expected = {
      error: "the letter or the length of number is illegal(the length should be 5/9/10 contain' - ')",
      data: ''
    };

    expect(theCall.transferToBarcode(input)).toEqual(expected);
  });

  it("check the number format_position", function () {
    let input = "";
    let expected = {
      error: "the letter or the length of number is illegal(the length should be 5/9/10 contain' - ')",
      data: ''
    };

    expect(theCall.transferToBarcode(input)).toEqual(expected);
  });
});