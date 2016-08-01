/**
 * Created by wt on 16-8-1.
 */
/*global require,module*/
const changeToZIP = require('../src/BarcodeToZIP');
const Zip = new changeToZIP();
class BarcodeToZIPAction {
    constructor() {
        this.name = 'BarcodeToZIP';
        this.help = 'Please input Barcode:'.trim();
    }

    doAction(cmd) {
        if (cmd === 'q') {
            return 'init';
        }
        else {
            console.log('I\'m converting the barcode: ' + cmd);
            console.log(Zip.changeToZIP(cmd));
            return 'BarcodeToZIP'
        }
    }
}
module.exports = BarcodeToZIPAction;