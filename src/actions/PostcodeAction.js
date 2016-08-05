/**
 * Created by shiyue on 16-8-1.
 */
'use strict';
const Postcode = require('../transformer/Postcode');
let PostcodeItem = new Postcode();

//邮编转条码类
class PostAction {
    constructor() {
        this.name = 'postcode';
        this.help = '\nplease input the postcode(eg:12345或123456789或12345-6789)/(back:b):';
    }

    doAction(cmd) {
        if (cmd === 'b') {
            return 'init';
        } else {
            console.log('the barcode is ' + PostcodeItem.zipcodeTraBarcode(cmd));
            return 'postcode';
        }
    }
}

module.exports = PostAction;