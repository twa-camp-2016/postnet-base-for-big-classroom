"use strict"
let response = require("./response");
class barcodeToZipCode {
    execute(input) {
        return this.changeToZipCode(input);
    }


    isLegalBarcode(barcode) {
        let barcode_array = barcode.split("");
        return barcode_array.every(function (item) {
            return item === "|" || item === " " || item === ":";
        });

    }

    static isLegalFrame(barcode) {
        return barcode.startsWith("| ") && barcode.endsWith(" |");
    }

    loadAllBarcode() {
        return [
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
    }

    formatBarcode(barcode) {
        return barcode.slice(2, barcode.length - 2);

    }

    changeBarcode(formattedBarcode, allBarcode) {
        let temp_array = formattedBarcode.split(' ');
        let changedBarcode = temp_array.map(function (item) {
            return allBarcode.indexOf(item);
        });

        return changedBarcode.join("");
    }

    getCheckDigit(changedBarcode) {
        let temp = changedBarcode.slice(0, changedBarcode.length).split("");
        let sum = temp.reduce(function (first, second) {
            return first + second;
        }, 0);

        return (10 - sum % 10) % 10;
    }

    getZipCode(changedBarcode, checkDigit) {
        if (parseInt(changedBarcode[changedBarcode.length - 1]) !== checkDigit) {
            return undefined;
        }
        return changedBarcode.slice(0, changedBarcode.length - 1);
    }


    changeToZipCode(barcode) {
        let resultOne = this.isLegalBarcode(barcode);
        let resultTwo = barcodeToZipCode.isLegalFrame(barcode);
        if (!(resultOne && resultTwo)) {
            return undefined;
        }
        let formattedBarcode = this.formatBarcode(barcode);
        let allBarcode = this.loadAllBarcode();
        let changedBarcode = this.changeBarcode(formattedBarcode, allBarcode);
        let checkDigit = this.getCheckDigit(changedBarcode);
        let zipCode = this.getZipCode(changedBarcode, checkDigit);
        return (new response(zipCode));
    }
}

module.exports = barcodeToZipCode;