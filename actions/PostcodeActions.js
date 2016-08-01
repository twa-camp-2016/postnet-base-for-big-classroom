/**
 * Created by yuan on 7/31/16.
 */
/**
 * Created by yuan on 7/31/16.
 */
/*global require,module*/
'use strict';
const  BarToPostcode= require('../codings/code_to_postcodes');
let barToBarcode=new BarToPostcode();
class Action {
    constructor() {
        this.name = 'postcodes';
        this.help = `Please input barcodes (q to exit)`.trim();
    }

    doAction(cmd) {
        if (cmd == 'q') {
            return 'init'
        }
        else {
            const postcode = barToBarcode.codingPostcodes(cmd);
            console.log('error: '+postcode.error);
            console.log('postcode: '+postcode.data);
            return 'postcodes';
        }
    }
}
module.exports = Action;