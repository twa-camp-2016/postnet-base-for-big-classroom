'use strict';
//barcode to postcode
class barcodeToPostcode{

  loadPostCodes() {
    return ["||:::", ":::||", "::|:|", "::||:", ":|::|", ":|:|:", ":||::",
      "|:::|", "|::|:", "|:|::"];
  }

  isLegalBarcode(barcodeString) {
    return /^\| [:| ]+\|$/.test(barcodeString);
  }

  getPostNumber(allZipCodes, barcodeString) {
    let postNumber = [];
    let temp = barcodeString.split(" ").slice(1, -1);

    return temp.map(function (item) {
      let pos = allZipCodes.indexOf(item);
      if (pos) {
        return pos;
      }
    });
  }

  isLegalCheckDigit(postCodes) {

    let total = postCodes.reduce(function (fir, sec) {
      return fir + sec;
    });

    return (total % 10) ? false : true;
  }

  formatPostCode(postCodes) {
    let formatedPostCode = postCodes.slice(0);

    if (formatedPostCode.length === 10) {
      formatedPostCode.splice(5, 0, '-');
    }
    let item = formatedPostCode.pop();

    return formatedPostCode.join('');
  }
  
  transferToPostCode(barcodeString) {
    let legalResult = this.isLegalBarcode(barcodeString);

    if (!legalResult) {
      return "error input(only '|'':'' 'can be accepted and ' 'is must)";
    }
    let allZipCodes = this.loadPostCodes();
    let postCodes = this.getPostNumber(allZipCodes, barcodeString);

    if (!(this.isLegalCheckDigit(postCodes))) {
      return "it has uncorrect checkdigit";
    }
    return this.formatPostCode(postCodes);
  }
}

module.exports = barcodeToPostcode;