/**
 * Created by shiyue on 16-8-1.
 */
'use strict';
const Barcode = require('../transformer/Barcode');
let BarcodeItem = new Barcode();

//条码转邮编类
class BarcodeAction {
    constructor() {
        this.name = 'barcode';
        this.help = "please input the barcode(include '|'或':'或' ')/(back:b):";
    }

    doAction(cmd) {
        if (cmd === 'b') {
            return 'init';
        } else {
            console.log('\nthe postcode is ' + BarcodeItem.barcodeTraZipcode(cmd) + '\n');
            return 'barcode';
        }
    }
}

module.exports = BarcodeAction;