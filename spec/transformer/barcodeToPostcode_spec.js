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
    let expected = "12345-1234";

    expect(theCall.transferToPostCode(input)).toEqual(expected);
  });

  it("barcode transfer to postcode", function () {
    let input = "| :::|| ::|:| ::||: :|::| :|:|: :|:|: |";
    let expected = "12345";

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