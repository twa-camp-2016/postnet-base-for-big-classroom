/**
 * Created by yuan on 7/31/16.
 */
/*global require,module*/
'use strict';
const PostToBarcode = require('../codings/code_to_barcodes.js');
let postToBarcode = new PostToBarcode();
class Action {
    constructor() {
        this.name = 'barcodes';
        this.help = `Please input postcodes (q to exit)`.trim();
    }

    doAction(cmd) {
        if (cmd == 'q') {
            return 'init'
        }
        else {
            const barcode = postToBarcode.codingBarcodes(cmd);
            if (barcode.error === undefined) {
                console.log('barcode:' + barcode.data);
            }
            if (barcode.data === undefined) {
                console.log('error: ' + barcode.error);
            }
            return 'barcodes';
        }
    }
}
module.exports = Action;