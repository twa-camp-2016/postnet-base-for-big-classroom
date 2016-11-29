'use strict';
/*数字转条形*/


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


/*条形转数字*/
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
//数字转条码
function zipcodeChangeBarcode(ZIP_code) {
    if (!isLegalZIPCode(ZIP_code)) {
        return undefined;
    }
    let checkDigit = calculateCheckDigit(ZIP_code);

    return getCodedZIPCode(ZIP_code, checkDigit, loadAllBarcodes());
}
//条码转数字

function barcodeChangeZipcode(barcode) {
    if (!(isLegalBarcode(barcode) && isLegalFrame(barcode) && isLegalLength(barcode))) {
        return undefined;
    }
    let reformedArray = reformBarcode(barcode);
    let encodesArray = getEncodedBarcode(loadAllBarcodes(), reformedArray);
    if (checkDigitTruty(encodesArray)) {
        return getZIPCode(encodesArray);
    } else {
        return undefined;
    }
}
module.exports = {
    a: isLegalZIPCode, b: loadAllBarcodes, c: calculateCheckDigit, d: getCodedZIPCode, e: isLegalBarcode,
    f: isLegalFrame, g: isLegalLength, h: reformBarcode, i: getEncodedBarcode, j: checkDigitTruty,
    m: getZIPCode, zipcodeChangeBarcode: zipcodeChangeBarcode, barcodeChangeZipcode: barcodeChangeZipcode
};