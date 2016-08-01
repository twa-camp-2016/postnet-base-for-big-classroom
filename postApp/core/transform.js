'use strict';
let postnet = require("./postnet");
function barcode2Zipcode(barcode) {
    const barcodes=new postnet.Barcode(barcode)
    if (!barcodes.checkBarcode(barcode)) {
        return {success: false, value: 'invalid_barcode'};
    }
    const deleteBorderBar = barcodes.deleteBorder(barcode);
    const digits= barcodes.barcodeToDigits(deleteBorderBar);
    if (!barcodes.checkDigit(digits)) {
        return {success: false, value: 'check_digit_error'};
    }
    const zipcode = barcodes.toZipcode(digits);
    const formattedZipcode = barcodes.align(zipcode);
    return {success: true, value: formattedZipcode}
}

function zipcode2Barcode(zipcode) {
    const zipcodes=new postnet.Zipcode(zipcode)
    if (!zipcodes.checkZipcode(zipcode)) {
         return {success: false, value: 'invalid_zipcode'};
    }
    const zipcodeWithoutDash = zipcodes.formatZipcode(zipcode);
    const zipcodeInDigitArray = zipcodes.toDigitArray(zipcodeWithoutDash);
    const checkDigit = zipcodes.calculateCheckDigit(zipcodeInDigitArray);
    const barcode = zipcodes.toBarcode(zipcodeInDigitArray.concat(checkDigit));
    return {success: true, value:barcode};
}
module.exports={zipcode2Barcode,barcode2Zipcode}