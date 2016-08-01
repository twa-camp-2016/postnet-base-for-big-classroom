/**
 * Created by ritter on 16-7-29.
 */

"use strict"

const BarcodeToPost = require('../BarcodeToPost');

let barcodeToPost = new BarcodeToPost();


class BarcodeAction  {

    constructor() {
        this.name = 'inputBarcode';
        this.help = 'input barcode state:\ninput baecode or input q init ';
    }

    doAction(cmd) {
        if (cmd.trim() === 'q') {
            return 'init';
        }
        console.log(barcodeToPost.changeBarcode(cmd.trim()) + "\n");
        return 'inputBarcode';
    }
}

module.exports = BarcodeAction;
