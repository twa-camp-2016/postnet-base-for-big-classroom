/**
 * Created by ritter on 16-7-29.
 */

const fnBarcode = require('../barcodeToPost');
const createAction = require('./createAction');

const name = 'inputBarcode';
const help = 'input barcode state:\ninput baecode or input q init ';

class barcodeAction extends createAction {

    constructor(name, help) {
        super(name, help);
    }

    doAction(cmd) {
        if (cmd.trim() === 'q') {
            return 'init';
        }
        console.log(fnBarcode.barcodeToPost(cmd.trim()) + "\n");
        return 'inputBarcode';
    }
}

module.exports = new barcodeAction(name, help);
