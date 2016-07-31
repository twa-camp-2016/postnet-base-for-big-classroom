/**
 * Created by afaren on 7/28/16.
 */
'use strict';
const vectorTable = [
  '||:::',
  ':::||',
  '::|:|',
  '::||:',
  ':|::|',
  ':|:|:',
  ':||::',
  '|:::|',
  '|::|:',
  '|:|::'
];


function getZipcodeCells(zipcode) {
  return zipcode.split('')
    .map(i => parseInt(i))
    .filter(i => !Object.is(i, NaN));
}

function buildBarcodeBody(zipcodeCells, checkDigit) {
  return zipcodeCells
    .concat(checkDigit)
    .map(i => vectorTable[i])
    .join(' ');
}

function addFrameToBarcodeBody(barcodeBody) {
  return `| ${barcodeBody} |`;
}

function zipcodeHasLegalLength(zipcodeCells) {
  const length = zipcodeCells.length;
  return length === 5 || length === 9;
}

function calculateCheckDigit(zipcodeCells) {
  let digit = getSum(zipcodeCells) % 10;
  return digit > 0 ? 10 - digit : 0;

  function getSum(zipcodeCells) {
    return zipcodeCells.reduce((acc, cur) => acc + cur);
  }

}

function zipcodeToBarcode(zipcode) {
  const zipcodeCells = getZipcodeCells(zipcode);

  if (!zipcodeHasLegalLength(zipcodeCells))
    return {errMsg: 'length is illegal', value: null};

  const checkDigit = calculateCheckDigit(zipcodeCells);
  const barcodeBody = buildBarcodeBody(zipcodeCells, checkDigit);
  const barcodeWithFrame = addFrameToBarcodeBody(barcodeBody);
  return {errMsg: null, value: barcodeWithFrame};
}

function discontainIllegalCharacter(barcode) {
  let legalCharacterSet = new Set(['|', ' ', ':']);
  for (let ch of barcode) {
    if (!legalCharacterSet.has(ch))
      return false;
  }
  return true;
}

function eachBarcodeHasLegalLength(barcodeWithoutFrame, legalLength, delimiter) {
  return barcodeWithoutFrame.split(delimiter).every(barcode => {
    return barcode.length === legalLength;
  });
}

function hasFrame(barcode) {

  let n = barcode.length;
  if (n < 4)
    return false;
  return hasHeadFrame(barcode.substring(0, 2)) && hasTailFrame(barcode.substring(n - 2, n));

  function hasHeadFrame(header) {
    return header === '| ';
  }

  function hasTailFrame(tail) {
    return tail === ' |';
  }
}

function isLegalBarcode(barcode) {
  return discontainIllegalCharacter(barcode)
    && hasFrame(barcode)
    && eachBarcodeHasLegalLength(removeFrame(barcode), 5, ' ');
}

function removeFrame(barcode) {
  return barcode.substring(2, barcode.length - 2); // 注意边界
}

function getBarcodeCells(barcodeWithoutFrame) {
  const delimiter = ' ';
  return barcodeWithoutFrame.split(delimiter);
}

function buildZipcode(zipcodeCells) {
  return zipcodeCells.join('');
}

function convertBarcodeCellsToZipcodeCells(barcodeCells) {
  const length = barcodeCells.length;
  return barcodeCells
    .filter((v, k) => k < length - 1)
    .map(i => vectorTable.indexOf(i));
}

function getCheckDigitInBarcode(barcodeCells) {
  const length = barcodeCells.length;
  return vectorTable.indexOf(barcodeCells[length - 1]);
}

function barcodeToZipcode(barcode) {
  if (!isLegalBarcode(barcode)) {
    return {errMsg: 'illegal barcode', value: null};
  }
  const barcodeWithoutFrame = removeFrame(barcode);
  const barcodeCells = getBarcodeCells(barcodeWithoutFrame);
  const zipcodeCells = convertBarcodeCellsToZipcodeCells(barcodeCells);
  const checkDigitCalculated = calculateCheckDigit(zipcodeCells);
  const checkDigitInBarcode = getCheckDigitInBarcode(barcodeCells);

  if (checkDigitCalculated !== checkDigitInBarcode) {
    return {errMsg: 'check digit error', value: null};
  }
  const zipcode = buildZipcode(zipcodeCells);

  return {errMsg:null, value:zipcode};
}


module.exports = {
  getZipcodeCells,
  buildBarcodeBody,
  calculateCheckDigit,
  zipcodeToBarcode,
  barcodeToZipcode,
  buildZipcode,
  isLegalBarcode,
  removeFrame,
  getBarcodeCells,
  convertBarcodeCellsToZipcodeCells,
  getCheckDigitInBarcode
};