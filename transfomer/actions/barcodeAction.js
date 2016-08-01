/**
 * Created by ritter on 16-7-29.
 */

"use strict"

const BarcodeToPost = require('../barcodeToPost');
const createAction = require('./createAction');

const name = 'inputBarcode';
const help = 'input barcode state:\ninput baecode or input q init ';

let barcodeToPost = new BarcodeToPost();

class barcodeAction extends createAction {

    constructor(name, help) {
        super(name, help);
    }

    doAction(cmd) {
        if (cmd.trim() === 'q') {
            return 'init';
        }
        console.log(barcodeToPost.changeBarcode(cmd.trim()) + "\n");
        return 'inputBarcode';
    }
}

module.exports = new barcodeAction(name, help);
