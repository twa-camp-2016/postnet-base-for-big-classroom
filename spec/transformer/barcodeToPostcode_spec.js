'use strict';
/**
 * Created by tong on 16-7-28.
 */

const barcodeToPostcode = require("../../transformer/core/BarcodeToPostcode.js");

//barcode to postcode
describe("transferToPostCode", function () {
  let theCall;

  beforeEach(()=> {
    theCall = new barcodeToPostcode();
  });


  it("barcode transfer to postcode", function () {
    let input = "| :::|| ::|:| ::||: :|::| :|:|: :::|| ::|:| ::||: :|::| :|:|: |";
    let expected = {
      error: '',
      data: "12345-1234"
    };

    expect(theCall.transferToPostCode(input)).toEqual(expected);
  });

  it("barcode transfer to postcode", function () {
    let input = "| :::|| ::|:| ::||: :|::| :|:|: :|:|: |";
    let expected = {
      error: '',
      data: "12345"
    };

    expect(theCall.transferToPostCode(input)).toEqual(expected);
  });

  it("barcode transfer to postcode", function () {
    let input = "| :::|| ::|:| ::||: :|::| :|:|: :::|| ::|:| ::||: :|::| :*|:: |";
    let expected = {
      error: "error input(only '|'':'' 'can be accepted and ' 'is must)",
      data: ''
    };

    expect(theCall.transferToPostCode(input)).toEqual(expected);
  });

  it("barcode transfer to postcode", function () {
    let input = "| :::|| ::|:| ::||: :|::| :|:|: :::|| ::|:| ::||: :|::| :||:: |";
    let expected = {
      error: "it has uncorrect checkdigit",
      data: ''
    };

    expect(theCall.transferToPostCode(input)).toEqual(expected);
  });
});