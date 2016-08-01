'use strict';
const table = [
    '||:::', ':::||', '::|:|', '::||:', ':|::|',
    ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'
];
class Barcode{

    checkBarcode(barcode) {
        return barcode.match(/^\|[: |]+\|$/);
    }
    deleteBorder(barcode) {
        return barcode.slice(1, -1);
    }
    barcodeToDigits(barcode) {
        return barcode.match(/.{1,5}/g).map(str => table.indexOf(str));
    }
    checkDigit(digits){
            return (digits.reduce((a, b) => a + b)) % 10 === 0;
    }
    align(zipcode) {
        if (zipcode.length === 9) {
            return `${zipcode.slice(0, 5)}-${zipcode.slice(5)}`;
        }
        return zipcode;
    }
    toZipcode(digits) {
        return digits.join('').slice(0, -1);
    }
}


class Zipcode {
    
    checkZipcode(zipcode) {
        return /^\d{5}$/.test(zipcode) || /^\d{9}$/.test(zipcode) || /^\d{5}-\d{4}/.test(zipcode);
    }
    toDigitArray(barcode) {
        return barcode.split('').map(c => parseInt(c));
    }
    calculateCheckDigit(barcode) {
        const digit=barcode.reduce((a, b) => a + b)%10;
        return digit > 0 ? 10 - digit : 0;
    }
    formatZipcode(zipcode) {
        return zipcode.replace('-', '');
    }
    toBarcode(zipcode) {
        let barcode=zipcode.map(i => table[i]).join('');
        return `|${barcode}|`
    }
}
module.exports = {
    Zipcode,
    Barcode
};