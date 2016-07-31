let postnet = require("./postcodeAndBarcode");

function postcodeToBarcode(inputPostcodes) {
    let barcodes;
    let postcode = new postnet.Postcode(inputPostcodes);
    if (postcode.checkPostcodes(inputPostcodes)) {
        let allBarcodes = postcode.loadAllBarcodes();
        let postcodes = postcode.getPostcodes(inputPostcodes);
        let postcodesList = postcode.getCheckcode(postcodes);
        barcodes = postcode.matchBarcodes(postcodesList, allBarcodes);
    }
    else {
        barcodes = 'input errors';
    }
    return barcodes;
}

function barcodeToPostcode(input) {
    let barcode = new postnet.Barcode(input);
    let isLegalInput = barcode.checkBarcodes(input);
    let postcodes;
    if (isLegalInput) {
        let barcodeList = barcode.getBarcodeWithoutFrame(input);
        let allBarcodes = barcode.loadAllBarcodes();
        let digits = barcode.getDigits(barcodeList, allBarcodes);
        let isLegalCheckcode = barcode.checkDigits(digits);
        if (isLegalCheckcode) {
            postcodes = barcode.matchPostcodes(digits);
        }
        else {
            postcodes = 'a wrong postcode';
        }
    }
    else {
        postcodes = 'a wrong input';
    }
    return postcodes;
}

module.exports = {postcodeToBarcode, barcodeToPostcode};