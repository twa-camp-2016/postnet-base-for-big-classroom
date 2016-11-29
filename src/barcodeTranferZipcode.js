'use strict'

const response = require('./responsesTranslate.js');
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
function isLegalBarcode(barcode) {
    for (let i = 0; i < barcode.length; i++) {
        if ((barcode[i] !== ' ') && (barcode[i] !== ':') && (barcode[i] !== '|')) {
            return false;
        }
    }
    return true;
}

function isLegalFrame(barcode) {
    if (barcode.length < 4) {
        return false;
    }

    return (barcode[0] === '|') && (barcode[1] === ' ') && (barcode[barcode.length - 1] === '|') && (barcode[barcode.length - 2] === ' ');
}

function isLegalLength(barcode) {
    return barcode.split(' ')
        .filter((v, k, arr)=> {
            return k > 0 && k < arr.length - 1;
        }).every(v=>v.length === 5);
}
function reformBarcode(barcode) {
    let tempArray = barcode.split(' ');
    return tempArray.filter(function (curr, index, array) {
        return index > 0 && index < array.length - 1;
    });

}

function getEncodedBarcode(allBarcodes, reformedArray) {
    return reformedArray.map(function (curr) {
        return allBarcodes.indexOf(curr);
    })
}

function checkDigitTruty(encodesArray) {
    let sum;
    let checkDigit = 0;


    sum = encodesArray.reduce(function (pre, curr) {
        return pre + curr;
    });
    sum -= encodesArray[encodesArray.length - 1];
    if (sum % 10) {
        checkDigit = 10 - sum % 10;
    }
    return checkDigit === encodesArray[encodesArray.length - 1];

}
function getZIPCode(encodesArray) {
    let emptyArray=[];

    emptyArray = encodesArray.filter(function (curr, index, arr) {
        return index >= 0 && index < arr.length - 1;
    }).map(function (it) {
        return it + "";
    }).reduce(function (pre, curr) {
        return pre + curr;
    });


    return emptyArray;
}
class BarcodeToZipcode {
    execute(input) {
        return this.barcodeChangeZipcode(input);
    }

    barcodeChangeZipcode(barcode) {
        if (!(isLegalBarcode(barcode) && isLegalFrame(barcode) && isLegalLength(barcode))) {
            return new response("error");
        }
        let reformedArray = reformBarcode(barcode);
        let encodesArray = getEncodedBarcode(loadAllBarcodes(), reformedArray);
        if (checkDigitTruty(encodesArray)) {
            let zipCode = getZIPCode(encodesArray);
            return (new response(zipCode));
        } else {
            return new response("error");
        }
    }
    printInput(){
        return input;
    }
}

module.exports = BarcodeToZipcode;