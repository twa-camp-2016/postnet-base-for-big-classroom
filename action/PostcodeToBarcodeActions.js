"use strict";

const Zipcodes = require("../src/Zipcode");
let zipcode = new Zipcodes();
class PostcodeToBarcodeActions {
    constructor() {
        this.name = 'postcodeToBarcode';
        this.help = `
please input a postcode with 5, 9, or 10 characters:
`.trim();
    }

    doAction(cmd) {
        console.log('your barcode is :\n ' + zipcode.changeToBarcode(cmd) + "\n");
        console.log('please choose what do you want to do next\n');
        return "postcode";
    }

}

module.exports = PostcodeToBarcodeActions;