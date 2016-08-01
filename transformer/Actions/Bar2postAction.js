/**
 * Created by hxc on 16-7-29.
 */
/**
 * Created by hxc on 16-7-29.
 */
const barcode = require('../core/BarcodeTransformer');


class BarcodeAction {
    constructor(name, help) {
        this.name = name;
        this.help = help;
    }

    doAction(cmd) {
        switch (cmd) {
            case 'q':
                return 'init';
            default:
                console.log(barcode.barcodeToPostCode(cmd));
                return 'barcode2Post';
        }
    }
}

module.exports = new BarcodeAction('barcode2Post', '请输入条码,退出请按q');


