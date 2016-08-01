"use strict";

const Barcodes = require("../src/Barcode");
let barcode = new Barcodes();
class BarcodeToPostCodeActions {
    constructor() {
        this.name = 'barcodeToPostCode'
        this.help = `
please input your barcode:
`.trim();
    }

    doAction(cmd) {
        console.log('your post code is :\n ' + barcode.changeToZipCode(cmd) + '\n');
        console.log('please choose what do you want to do next\n');

        return "barcode";

    }
}

module.exports = BarcodeToPostCodeActions;

