'use strict'
const responses = require('./responsesTranslate.js');
function loadAllBarcodes() {
    return ["||:::",
        ":::||",
        "::|:|",
        "::||:",
        ":|::|",
        ":|:|:",
        ":||::",
        "|:::|",
        "|::|:",
        "|:|::"];

}
function isLegalZIPCode(ZIP_code) {
    return /^\d{5}(-?\d{4})?$/.test(ZIP_code);
}

function calculateCheckDigit(ZIP_code) {

    let checkDigit = 0;

    let temp = ZIP_code.split("");
    let tempArray = temp.filter(function (it) {
        return it !== '-';

    });
    let sum = tempArray.map(function (it) {
        return +it;

    }).reduce(function (previous, current) {
        return previous + current;
    });
    if (sum % 10) {
        checkDigit = 10 - sum % 10;
    }

    return checkDigit;

}


function getCodedZIPCode(ZIP_code, checkDigit, allBarcodes) {
    let codedZIPCode = "|";

    let codeArray = ZIP_code.split("").
    filter(function (curr) {
        return curr!=='-';
    });
    codedZIPCode += codeArray.map(function (code) {
        return allBarcodes[parseInt(code)];
    }).reduce(function (pre, curr) {
        return pre + curr;
    });
    codedZIPCode += allBarcodes[checkDigit] + "|";
    return codedZIPCode;

}


class ZipcodeToBarcode {
    execute(input) {
        return this.zipcodeChangeBarcode(input);
    }

    zipcodeChangeBarcode(zipcode) {
        if (!(isLegalZIPCode(zipcode))) {
            return new responses("error");
        }
        let checkDigit = calculateCheckDigit(zipcode);

        let barcode = getCodedZIPCode(zipcode, checkDigit, loadAllBarcodes());
        return new responses(barcode);
    }
}
module.exports = ZipcodeToBarcode;