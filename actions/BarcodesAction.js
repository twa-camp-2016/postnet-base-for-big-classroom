/**
 * Created by lucky on 16-8-1.
 */
'use strict';
const BarcodeToZipCode = require("../core/BarcodeToZipCode");

const barcode = new BarcodeToZipCode();

class BarcodesAction {
    constructor() {
        this.name = 'barcode';
        this.help = `Please input barcode(press 'q' to quit)`.trim()
    }
    doAction(cmd) {
        switch (cmd) {
            case 'q':
                return 'init';
            default:
                const result=barcode.covertToZipCodes(cmd);
                console.log('zipCode:'+result.data+'\n'+'error:' + result.error);
                return 'barcode';
        }
    }
}


module.exports = BarcodesAction;