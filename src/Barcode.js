
"use strict";
 function isLegalBarcode(barcode) {
    let barcode_array = barcode.split("");
    return barcode_array.every(function (item) {
        return item === "|" || item === " " || item === ":";
    });

}

function  isLegalFrame(barcode) {
    return barcode.startsWith("| ") && barcode.endsWith(" |");
}

function loadAllBarcode() {
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

function formatBarcode(barcode) {
    return barcode.slice(2, barcode.length - 2);

}

function changeBarcode(formattedBarcode, allBarcode) {
    let temp_array = formattedBarcode.split(' ');
    let changedBarcode = temp_array.map(function (item) {
        return allBarcode.indexOf(item);
    });

    return changedBarcode.join("");
}

function getCheckDigit(changedBarcode) {
    let temp = changedBarcode.slice(0, changedBarcode.length).split("");
    let sum = temp.reduce(function (first, second) {
        return first + second;
    }, 0);

    return (10 - sum % 10) % 10;
}

function getZipCode(changedBarcode, checkDigit) {
    if (parseInt(changedBarcode[changedBarcode.length - 1]) !== checkDigit) {
        return undefined;
    }
    return changedBarcode.slice(0, changedBarcode.length - 1);
}

class Barcode {
    changeToZipCode(barcode) {
        let resultOne = isLegalBarcode(barcode);
        let resultTwo = isLegalFrame(barcode);
        if (!(resultOne && resultTwo)) {
            return undefined;
        }
        let formattedBarcode = formatBarcode(barcode);
        let allBarcode = loadAllBarcode();
        let changedBarcode = changeBarcode(formattedBarcode, allBarcode);
        let checkDigit = getCheckDigit(changedBarcode);
        let zipCode = getZipCode(changedBarcode, checkDigit);
        return zipCode;
    }
}

module.exports = Barcode;

