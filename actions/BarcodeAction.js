'use strict';
const Barcode = require('../core/Barcode');
const barcode = new Barcode();
class BarcodeAction {
    constructor() {
        this.name = 'barcode';
        this.help = `
    Please input barcode(Input q exit):`.trim();
    }

    doAction(cmd) {
        if (cmd == 'q') {
            return 'init';
        }
        else if (barcode.transform(cmd) === undefined) {
            //return "This barcode is error!";
            console.log("This barcode is error!");
            return 'barcode';
        }
        else {
            /*return 'I\'m converting the barcode: ' + cmd + "\n" + 'This is the correct postcode: '
                + barcode.transform(cmd);*/
            console.log('I\'m converting the barcode: ' + cmd + "\n" + 'This is the correct postcode: '
                + barcode.transform(cmd));
            return 'barcode';
        }

    }
}

module.exports = BarcodeAction;
