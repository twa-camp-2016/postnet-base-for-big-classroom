/**
 * Created by hxc on 16-7-29.
 */

const Action = require('./creatAction');
const post = require('./postTobarcode');
let post2barcodeDoAction = new Action('post2Barcode', '请输入邮编，退出请按q', post2barcodeAction);

function post2barcodeAction(cmd) {
    switch (cmd) {
        case 'q':
            return 'init';
        default:
            console.log(post.postToBarcode(cmd));
            return 'post2Barcode';
    }
}
module.exports = post2barcodeDoAction;