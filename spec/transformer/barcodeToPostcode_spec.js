'use strict';
/**
 * Created by tong on 16-7-28.
 */

const theCall = require("../../transformer/barcodeToPostcode.js");

//barcode to postcode
describe("transferToPostCode", function () {
  it("barcode transfer to postcode", function () {
    let input = "| :::|| ::|:| ::||: :|::| :|:|: :::|| ::|:| ::||: :|::| :|:|: |";
    let expected = "12345-1234";

    expect(theCall.transferToPostCode(input)).toEqual(expected);
  });

  it("barcode transfer to postcode", function () {
    let input = "| :::|| ::|:| ::||: :|::| :|:|: :::|| ::|:| ::||: :|::| :*|:: |";
    let expected = "error input(only '|'':'' 'can be accepted and ' 'is must)";

    expect(theCall.transferToPostCode(input)).toEqual(expected);
  });

  it("barcode transfer to postcode", function () {
    let input = "| :::|| ::|:| ::||: :|::| :|:|: :::|| ::|:| ::||: :|::| :||:: |";
    let expected = "it has uncorrect checkdigit";

    expect(theCall.transferToPostCode(input)).toEqual(expected);
  });
});

describe("isLegalBarcode", function () {
  it("to check the string", function () {
    let input = "| :::|| ::|:| ::||: :|::| :|:|: :::|| ::|:| ::||: :|::| :|:|: |";
    let expected = true;

    expect(theCall.isLegalBarcode(input)).toBe(expected);
  });

  it("to check the false string", function () {
    let input = ":::*|";
    let expected = false;

    expect(theCall.isLegalBarcode(input)).toBe(expected);
  });
});

describe("getPostNumber", function () {
  it("change the postcode to numbercode", function () {
    let input = "| :::|| ::|:| ::||: :|::| :|:|: :::|| ::|:| ::||: :|::| :|:|: |";
    let expected = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

    let allZipCodes = theCall.loadPostCodes();
    expect(theCall.getPostNumber(allZipCodes, input)).toEqual(expected);
  });
});

describe("isLegalCheckDigit", function () {
  it("to check the checkdigit and return true", function () {
    let input = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    let expected = true;

    expect(theCall.isLegalCheckDigit(input)).toBe(expected);
  });

  it("to check the checkdigit and return false", function () {
    let input = [1, 2, 3, 4, 5, 1, 2, 3, 4, 6];
    let expected = false;

    expect(theCall.isLegalCheckDigit(input)).toBe(expected);
  });
});

describe("formatPostCode", function () {
  it("format the numbers(length = 9)", function () {
    let input = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    let expected = "12345-1234";

    expect(theCall.formatPostCode(input)).toEqual(expected);
  });

  it("format the numbers(length = 5)", function () {
    let input = [1, 2, 3, 4, 4, 6];
    let expected = "12344";

    expect(theCall.formatPostCode(input)).toEqual(expected);
  });
});