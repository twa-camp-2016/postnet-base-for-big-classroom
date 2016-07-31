/**
 * Created by hxc on 16-7-29.
 */
/**
 * Created by hxc on 16-7-29.
 */
const barcode = require('./barcodeTopost');
const Action = require('./creatAction');

function Bar2Post(name, help) {
    Action.call(this, name, help);
}

Bar2Post.prototype = new Action();

Bar2Post.prototype.doAction = function (cmd) {
    switch (cmd) {
        case 'q':
            return 'init';
        default:
            console.log(barcode.barcodeToPostCode(cmd));
            return 'barcode2Post';
    }
};

let bar2post = new Bar2Post('barcode2Post', '请输入条码,退出请按q');
module.exports = bar2post;


