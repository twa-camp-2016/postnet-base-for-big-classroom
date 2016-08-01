'use strict';
const Barcode = require('../core/Barcode');
const barcodes = new Barcode();
class BarcodeAction {
    constructor() {
        this.name = 'barcode';
        this.help = '请选择：输入条形码或者q退出或者r返回上一层:';
    }

    doAction(cmd) {
        if (cmd == 'q') {
            process.exit(0);

        }
        else if (cmd == 'r') {
            return 'init';

        }
        else {
            const zipcode = barcodes.barcode2Zipcode(cmd);
            console.log(zipcode.value);
            return 'barcode'
        }

    }
}
module.exports = BarcodeAction;
