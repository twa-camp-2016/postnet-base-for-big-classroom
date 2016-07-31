'use strict'
const responses = require('./responsesTranslate.js');
class zipcodeToBarcode {
    execute(input) {
        return this.zipcodeChangeBarcode(input);
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

    isLegalZIPCode(zipcode) {
        return /^\d{5}(-?\d{4})?$/.test(zipcode);
    }

    calculateCheckDigit(zipcode) {

        let checkDigit = 0;

        let temp = zipcode.split("");
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


    getCodedZIPCode(zipcode, checkDigit, allBarcodes) {
        let codedZIPCode = "|";

        let codeArray = zipcode.split("").filter(function (curr) {
            return curr !== '-';
        });
        codedZIPCode += codeArray.map(function (code) {
            return allBarcodes[parseInt(code)];
        }).reduce(function (pre, curr) {
            return pre + curr;
        });
        codedZIPCode += allBarcodes[checkDigit] + "|";
        return codedZIPCode;

    }

    zipcodeChangeBarcode(zipcode) {
        if (!(this.isLegalZIPCode(zipcode))) {
            return undefined;
        }
        let checkDigit = this.calculateCheckDigit(zipcode);

        let barcode = this.getCodedZIPCode(zipcode, checkDigit, this.loadAllBarcodes());
        return new responses(barcode);
    }
}
module.exports = zipcodeToBarcode;