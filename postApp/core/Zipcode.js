'use strict';
const table = [
    '||:::', ':::||', '::|:|', '::||:', ':|::|',
    ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'
];
function checkZipcode(zipcode) {
    return /^\d{5}$/.test(zipcode) || /^\d{9}$/.test(zipcode) || /^\d{5}-\d{4}/.test(zipcode);
}
function toDigitArray(barcode) {
    return barcode.split('').map(c => parseInt(c));
}
function calculateCheckDigit(barcode) {
    const digit = barcode.reduce((a, b) => a + b) % 10;
    return digit > 0 ? 10 - digit : 0;
}
function formatZipcode(zipcode) {
    return zipcode.replace('-', '');
}
function toBarcode(zipcode) {
    let barcode = zipcode.map(i => table[i]).join('');
    return `|${barcode}|`
}

class Zipcode {
    zipcode2Barcode(zipcode) {
        if (!checkZipcode(zipcode)) {
            return {success: false, value: 'invalid_zipcode'};
        }
        const zipcodeWithoutDash = formatZipcode(zipcode);
        const zipcodeInDigitArray = toDigitArray(zipcodeWithoutDash);
        const checkDigit = calculateCheckDigit(zipcodeInDigitArray);
        const barcode = toBarcode(zipcodeInDigitArray.concat(checkDigit));
        return {success: true, value: barcode};
    }

}

module.exports = Zipcode;

    


