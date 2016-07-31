'use strict'

const response = require('./responsesTranslate.js');


class barcodeToZipcode {
    execute(input) {
        return this.barcodeChangeZipcode(input);
    }

    loadAllBarcodes() {
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

    //legal:
    isLegalBarcode(barcode) {
        for (let i = 0; i < barcode.length; i++) {
            if ((barcode[i] !== ' ') && (barcode[i] !== ':') && (barcode[i] !== '|')) {
                return false;
            }
        }
        return true;
    }

    isLegalFrame(barcode) {
        if (barcode.length < 4) {
            return false;
        }

        return (barcode[0] === '|') && (barcode[1] === ' ') && (barcode[barcode.length - 1] === '|') && (barcode[barcode.length - 2] === ' ');
    }

    isLegalLength(barcode) {
        return barcode.split(' ')
            .filter((v, k, arr)=> {
                return k > 0 && k < arr.length - 1;
            }).every(v=>v.length === 5);
    }

    reformBarcode(barcode) {
        let tempArray = barcode.split(' ');
        return tempArray.filter(function (curr, index, array) {
            return index > 0 && index < array.length - 1;
        });

    }

    getEncodedBarcode(allBarcodes, reformedArray) {
        return reformedArray.map(function (curr) {
            return allBarcodes.indexOf(curr);
        })
    }

    checkDigitTruty(encodesArray) {
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

    getZIPCode(encodesArray) {
        let emptyArray = [];

        emptyArray = encodesArray.filter(function (curr, index, arr) {
            return index >= 0 && index < arr.length - 1;
        }).map(function (it) {
            return it + "";
        }).reduce(function (pre, curr) {
            return pre + curr;
        });


        return emptyArray;
    }

    //总函数
    /* 输入送进来，输出送出去（用户只看输入输出---封装）*/
    barcodeChangeZipcode(barcode) {
        if (!(this.isLegalBarcode(barcode) && this.isLegalFrame(barcode) && this.isLegalLength(barcode))) {
            return undefined;
        }
        let reformedArray = this.reformBarcode(barcode);
        let encodesArray = this.getEncodedBarcode(this.loadAllBarcodes(), reformedArray);
        if (this.checkDigitTruty(encodesArray)) {
            let zipCode = this.getZIPCode(encodesArray);
            return (new response(zipCode));
        } else {
            return undefined;
        }
    }
}

module.exports = barcodeToZipcode;