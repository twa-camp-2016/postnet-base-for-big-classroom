'use strict';
/**
 * Created by tong on 16-7-28.
 */
const postcodeToBarcode = require("../../transformer/core/postcodeToBarcode.js");

//postcode to barcode
describe("transferToBarcode", function () {
  let theCall;
  
  beforeEach(()=> {
    theCall = new postcodeToBarcode();
  });

  it("postCode transformer to barcode", function () {
    let input = "12345-1234";
    let expected = "|:::||::|:|::||::|::|:|:|::::||::|:|::||::|::|:|:|:|";
    let check = 5;

    expect(theCall.transferToBarcode(input)).toEqual(expected + '\ncd is ' + check);
  });

  it("postCode transformer to barcode", function () {
    let input = "123451234";
    let expected = "|:::||::|:|::||::|::|:|:|::::||::|:|::||::|::|:|:|:|";
    let check = 5;

    expect(theCall.transferToBarcode(input)).toEqual(expected + '\ncd is ' + check);
  });

  it("postCode transformer to barcode", function () {
    let input = "12345";
    let expected = "|:::||::|:|::||::|::|:|:|::|:|:|";
    let check = 5;

    expect(theCall.transferToBarcode(input)).toEqual(expected + '\ncd is ' + check);
  });

  it("check the number format_length", function () {
    let input = "1234";
    let expected = "the letter or the length of number is illegal(the length should be 5/9/10 contain'-')";

    expect(theCall.transferToBarcode(input)).toBe(expected);
  });

  it("check the number format_letter", function () {
    let input = "1234a1234";
    let expected = "the letter or the length of number is illegal(the length should be 5/9/10 contain'-')";

    expect(theCall.transferToBarcode(input)).toBe(expected);
  });

  it("check the number format_position", function () {
    let input = "123-41234";
    let expected = "the letter or the length of number is illegal(the length should be 5/9/10 contain'-')";

    expect(theCall.transferToBarcode(input)).toBe(expected);
  });

  it("check the number format_position", function () {
    let input = "";
    let expected = "the letter or the length of number is illegal(the length should be 5/9/10 contain'-')";

    expect(theCall.transferToBarcode(input)).toBe(expected);
  });
});