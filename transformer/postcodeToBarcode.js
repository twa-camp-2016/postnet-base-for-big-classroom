'use strict';

//postcode to barcode
class postcodeToBarcode{

  loadPostCodes() {
    return ["||:::", ":::||", "::|:|", "::||:", ":|::|", ":|:|:", ":||::",
      "|:::|", "|::|:", "|:|::"];
  }

  isFormatString(postCodeString) {
    let result = /^\d{5}$|^\d{9}$|^\d{5}-\d{4}$/.test(postCodeString);
    if (!result) {
      result = "the letter or the length of number is illegal(the length should be 5/9/10 contain'-')";
    }
    return result;
  }

  getFormatNumbers(postCodeString) {
    let temp = postCodeString.replace('-', '').split("");

    return temp.map(function (item) {
      return parseInt(item);
    });
  }

  getCheckDigit(formatedNumbers) {
    let total = formatedNumbers.slice(0)
            .reduce(function (fir, sec) {
              return fir + sec;
            });
    return (10 - total % 10);
  }

  generateBarcode(allZipCodes, checkDigit, formatedNumbers) {
    let formatedBarcode = formatedNumbers.map(function (item) {
      return allZipCodes[item];
    }).join('');

    return '|' + formatedBarcode + allZipCodes[checkDigit] + '|';
  }


  transferToBarcode(postCodeString) {
    let checkResult = this.isFormatString(postCodeString);
    if (checkResult !== true) {
      return checkResult;
    }

    let allZipCodes = this.loadPostCodes();
    let formatedNumbers = this.getFormatNumbers(postCodeString);
    let checkDigit = this.getCheckDigit(formatedNumbers);
    let formatedBarcode = this.generateBarcode(allZipCodes, checkDigit, formatedNumbers);

    return formatedBarcode + '\ncd is ' + checkDigit;
  }
  
}
module.exports = postcodeToBarcode;