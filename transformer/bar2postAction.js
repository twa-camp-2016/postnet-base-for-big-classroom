/**
 * Created by hxc on 16-7-29.
 */
/**
 * Created by hxc on 16-7-29.
 */
const barcode = require('./barcodeTopost');
const Action = require('./creatAction');

let bar2post = new Action('barcode2Post', '请输入条码,退出请按Q', bar2postAction);

function bar2postAction(cmd) {
    switch (cmd) {
        case 'q':
            return 'init';
        default:
            console.log(barcode.barcodeToPostCode(cmd));
            return 'barcode2Post';
    }
}
module.exports = bar2post;