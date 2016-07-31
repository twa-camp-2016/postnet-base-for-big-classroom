/**
 * Created by hxc on 16-7-29.
 */

const Action = require('./creatAction');
function Init(name, help) {
    Action.call(this, name, help);
}

Init.prototype = new Action();

Init.prototype.doAction = function (cmd) {
    switch (cmd) {
        case '1':
            return 'post2Barcode';
        case '2':
            return 'barcode2Post';
        case '3':
            // replServer.close();
            process.exit(0);
            return;
        default:
            console.log("无效的输入");
            return 'init'
    }
};

let initDoAction = new Init('init', '初始化界面:\n1-postToBarcode\n2-barcodeToPostCode\n3-退出\n请输入您的选择');

module.exports = initDoAction;