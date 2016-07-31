'use strict';

//postcode to barcode
class Postcode {
    constructor(postcode) {
        this.postcode = postcode;
    }

    loadAllBarcodes() {
        return ['||:::', ':::||', '::|:|', '::||:', ':|::|',
            ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
    }

    checkPostcodes(inputPostcodes) {
        return /^\d{5}(-?\d{4})?$/.test(inputPostcodes);
    }

    getPostcodes(inputPostcodes) {
        return inputPostcodes.replace('-', '').split('').map(function (item) {
            return item = parseInt(item);
        });
    }

    getCheckcode(postcodes) {
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

    matchBarcodes(postcodesList, allBarcodes) {
        let barcodes = [];
        barcodes.push('|');
        postcodesList.map(function (i) {
            barcodes.push(allBarcodes[i]);
        });
        barcodes.push('|');
        return barcodes.join('');
    }


}
//barcode to postcode

class Barcode {
    constructor(barcode) {
        this.barcode = barcode;
    }

    loadAllBarcodes() {
        return ['||:::', ':::||', '::|:|', '::||:', ':|::|',
            ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
    }

    checkBarcodes(input) {
        let barcodeArray = input.split(' ');
        let bar = '|';
        for (let i = 0; i < barcodeArray.length; i++) {
            return ((barcodeArray[i] === '|' || barcodeArray[i] === ':'
            || barcodeArray[i] === ' ') && barcodeArray[0] === bar
            && barcodeArray[barcodeArray.length - 1] === bar
            && (barcodeArray.length === 8 || barcodeArray.length === 12));
        }
    }

    getBarcodeWithoutFrame(input) {
        let barcodeList = [];
        let result = input.split(' ');
        result.filter((v, k, arr)=> {
            if (k > 0 && k < arr.length - 1) {
                barcodeList.push(v);
            }
        });
        return barcodeList;
    }

    getDigits(barcodeList, allBarcodes) {
        return barcodeList.map(function (barcode) {
            return allBarcodes.indexOf(barcode);
        });
    }

    checkDigits(digits) {
        let sum = digits.reduce(function (cur, newval) {
            return cur + newval;
        });
        return sum % 10 === 0;
    }

    matchPostcodes(digits) {
        let digitsString = digits.join('');
        let partOne = digitsString.substring(0, 5);
        let partTwo = digitsString.substring(5, digitsString.length - 1);
        if (digits.length > 6) {
            return partOne + '-' + partTwo;
        } else {
            return partOne;
        }
    }
}

module.exports = {Postcode, Barcode};

