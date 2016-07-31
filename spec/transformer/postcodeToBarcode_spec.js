'use strict';
/**
 * Created by tong on 16-7-28.
 */
const theCall = require("../../transformer/postcodeToBarcode.js");

//postcode to barcode
describe("transferToBarcode", function () {
  it("postCode transformer to barcode", function () {
    let input = "12345-1234";
    let expected = "|:::||::|:|::||::|::|:|:|::::||::|:|::||::|::|:|:|:|";
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
});

describe("isFormatString", function () {
  it("check the number format", function () {
    let input = "12345-1234";
    let expected = true;

    expect(theCall.isFormatString(input)).toBe(expected);
  });

  it("check the number format_length", function () {
    let input = "1234";
    let expected = "the letter or the length of number is illegal(the length should be 5/9/10 contain'-')";

    expect(theCall.isFormatString(input)).toBe(expected);
  });

  it("check the number format_letter", function () {
    let input = "1234a1234";
    let expected = "the letter or the length of number is illegal(the length should be 5/9/10 contain'-')";

    expect(theCall.isFormatString(input)).toBe(expected);
  });
});

describe("getFormatNumbers", function () {
  it("to format the string and generate a array of number", function () {
    let input = "12345-1234";
    let expected = [1, 2, 3, 4, 5, 1, 2, 3, 4];

    expect(theCall.getFormatNumbers(input)).toEqual(expected);
  });
});


describe("getCheckDigit", function () {
  it("get check digit", function () {
    let inputs = [1, 2, 3, 4, 5, 1, 2, 3, 4];
    let expected = 5;

    expect(theCall.getCheckDigit(inputs)).toEqual(expected);
  });
});

describe("generateBarcode", function () {
  it("get the post code", function () {
    let inputs = [1, 2, 3, 4, 5, 1, 2, 3, 4];
    let checkDigit = 5;
    let allZipCodes = theCall.loadPostCodes();
    let expected = "|:::||::|:|::||::|::|:|:|::::||::|:|::||::|::|:|:|:|";

    expect(theCall.generateBarcode(allZipCodes, checkDigit, inputs)).toEqual(expected);
  });
});