'use strict';

//postcode to barcode

function loadAllBarcodes() {
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|',
        ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}

function checkPostcodes(inputPostcodes) {
    return /^\d{5}(-?\d{4})?$/.test(inputPostcodes);
}

function getPostcodes(inputPostcodes) {
    return inputPostcodes.replace('-', '').split('').map(function (item) {
        return item = parseInt(item);
    });
}

function getCheckcode(postcodes) {
    let sum = postcodes.reduce(function (cur, newVal) {
        return cur + newVal;
    }, 0);
    if (sum % 10 === 0) {
        postcodes.push(0);
    }
    else {
        postcodes.push(10 - sum % 10);
    }
    return postcodes;
}

function matchBarcodes(postcodesList, allBarcodes) {
    let barcodes = [];
    barcodes.push('|');
    postcodesList.map(function (i) {
        barcodes.push(allBarcodes[i]);
    });
    barcodes.push('|');
    return barcodes.join('');
}

class PostcodeToBarcode {
    constructor(inputPostcodes) {
        this.inputPostcodes = inputPostcodes;
    }

    postcodeToBarcode(inputPostcodes) {
        let barcodes;
        if (checkPostcodes(inputPostcodes)) {
            let allBarcodes = loadAllBarcodes();
            let postcodes = getPostcodes(inputPostcodes);
            let postcodesList = getCheckcode(postcodes);
            barcodes = matchBarcodes(postcodesList, allBarcodes);
        }
        else {
            barcodes = 'input errors';
        }
        return barcodes;
    }
}

//barcode to postcode

function checkBarcodes(input) {
    let barcodeArray = input.split(' ');
    let bar = '|';
    for (let i = 0; i < barcodeArray.length; i++) {
        return ((barcodeArray[i] === '|' || barcodeArray[i] === ':'
        || barcodeArray[i] === ' ') && barcodeArray[0] === bar
        && barcodeArray[barcodeArray.length - 1] === bar
        && (barcodeArray.length === 8 || barcodeArray.length === 12));
    }
}

function getBarcodeWithoutFrame(input) {
    let barcodeList = [];
    let result = input.split(' ');
    result.filter((v, k, arr)=> {
        if (k > 0 && k < arr.length - 1) {
            barcodeList.push(v);
        }
    });
    return barcodeList;
}

function getDigits(barcodeList, allBarcodes) {
    return barcodeList.map(function (barcode) {
        return allBarcodes.indexOf(barcode);
    });
}

function checkDigits(digits) {
    let sum = digits.reduce(function (cur, newval) {
        return cur + newval;
    });
    return sum % 10 === 0;
}

function matchPostcodes(digits) {
    let digitsString = digits.join('');
    let partOne = digitsString.substring(0, 5);
    let partTwo = digitsString.substring(5, digitsString.length - 1);
    if (digits.length > 6) {
        return partOne + '-' + partTwo;
    } else {
        return partOne;
    }
}

class BarcodeToPostcode {
    constructor(input) {
        this.input = input;
    }

    barcodeToPostcode(input) {
        let isLegalInput = checkBarcodes(input);
        let postcodes;
        if (isLegalInput) {
            let barcodeList = getBarcodeWithoutFrame(input);
            let allBarcodes = loadAllBarcodes();
            let digits = getDigits(barcodeList, allBarcodes);
            let isLegalCheckcode = checkDigits(digits);
            if (isLegalCheckcode) {
                postcodes = matchPostcodes(digits);
            }
            else {
                postcodes = 'a wrong postcode';
            }
        }
        else {
            postcodes = 'a wrong input';
        }
        return postcodes;
    }
}

module.exports = {PostcodeToBarcode, BarcodeToPostcode};

