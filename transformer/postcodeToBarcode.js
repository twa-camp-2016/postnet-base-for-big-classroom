'use strict';

//postcode to barcode
function loadPostCodes() {
  return ["||:::", ":::||", "::|:|", "::||:", ":|::|", ":|:|:", ":||::",
    "|:::|", "|::|:", "|:|::"];
}

function transferToBarcode(postCodeString) {
  let checkResult = isFormatString(postCodeString);
  if (checkResult !== true) {
    return checkResult;
  }

  let allZipCodes = loadPostCodes();
  let formatedNumbers = getFormatNumbers(postCodeString);
  let checkDigit = getCheckDigit(formatedNumbers);
  let formatedBarcode = generateBarcode(allZipCodes, checkDigit, formatedNumbers);
  
  return formatedBarcode + '\ncd is ' + checkDigit;
}

function isFormatString(postCodeString) {
  let result = /^\d{5}$|^\d{9}$|^\d{5}-\d{4}$/.test(postCodeString);
  if (!result) {
    result = "the letter or the length of number is illegal(the length should be 5/9/10 contain'-')";
  }
  return result;
}

function getFormatNumbers(postCodeString) {
  let temp = postCodeString.replace('-', '').split("");

  return temp.map(function (item) {
    return parseInt(item);
  });
}

function getCheckDigit(formatedNumbers) {
  let total = formatedNumbers.slice(0)
          .reduce(function (fir, sec) {
            return fir + sec;
          });
  return (10 - total % 10);
}

function generateBarcode(allZipCodes, checkDigit, formatedNumbers) {
  let formatedBarcode = formatedNumbers.map(function (item) {
    return allZipCodes[item];
  }).join('');

  return '|' + formatedBarcode + allZipCodes[checkDigit] + '|';
}

module.exports = {
  loadPostCodes: loadPostCodes,
  transferToBarcode: transferToBarcode,
  isFormatString: isFormatString,
  getFormatNumbers: getFormatNumbers,
  getCheckDigit: getCheckDigit,
  generateBarcode: generateBarcode
}