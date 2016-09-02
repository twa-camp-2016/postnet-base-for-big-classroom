'use strict';

//barcode to postcode

function isLegalBarcode(barcodeString) {
  return /^\| [:| ]+\|$/.test(barcodeString);
}

function loadPostCodes() {
  return ["||:::", ":::||", "::|:|", "::||:", ":|::|", ":|:|:", ":||::",
    "|:::|", "|::|:", "|:|::"];
}

function getPostNumber(allZipCodes, barcodeString) {
  let postNumber = [];
  let temp = barcodeString.split(" ").slice(1, -1);

  return temp.map(function (item) {
    let pos = allZipCodes.indexOf(item);
    if (pos) {
      return pos;
    }
  });
}

function isLegalCheckDigit(postCodes) {

  let total = postCodes.reduce(function (fir, sec) {
    return fir + sec;
  });

  return (total % 10) ? false : true;
}

function formatPostCode(postCodes) {
  let formatedPostCode = postCodes.slice(0);

  if (formatedPostCode.length === 10) {
    formatedPostCode.splice(5, 0, '-');
  }
  let item = formatedPostCode.pop();

  return formatedPostCode.join('');
}

class BarcodeToPostCode {
  transferToPostCode(barcodeString) {
    let legalResult = isLegalBarcode(barcodeString);

    if (!legalResult) {
      return {
        error: `error input(only '|'':'' 'can be accepted and ' 'is must)`,
        data: ''
      };
    }
    let allZipCodes = loadPostCodes();
    let postCodes = getPostNumber(allZipCodes, barcodeString);

    if (!(isLegalCheckDigit(postCodes))) {
      return {
        error: 'it has uncorrect checkdigit',
        data: ''
      };
    }
    return {
      error: '',
      data: formatPostCode(postCodes)
    };
  }
}

module.exports = BarcodeToPostCode;