/**
 * Created by wt on 16-8-1.
 */
/*global require*/
const changeToBarcode = require('../src/ZIPToBarcode');
const barcode = new changeToBarcode();
class ZIPToBarcodeAction {
    constructor() {
        this.name = 'ZIPToBarcode';
        this.help = `Please input ZIP:`.trim();
    }

    doAction(cmd) {
        if (cmd === 'q') {
            return 'init';
        }
        else {
            console.log('I\'m converting the ZIP code: ' + cmd);
            console.log(barcode.changeToBarcode(cmd));
            return 'ZIPToBarcode';
        }
    }
}
module.exports = ZIPToBarcodeAction;