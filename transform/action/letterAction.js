'use strict'
const a = require('../postNet');
class LetterAction {
    constructor() {
        this.name = 'letter';
        this.help = '直接输入转化 b-回到首页 q-退出 ';
    }

    doAction(cmd) {
        switch (cmd) {
            case 'q':
                process.exit(0);
                return;
            case 'b':
                return 'init';
            default:
                console.log('开始转化');
                console.log(new a().barcodeToZipcode(cmd));
                return 'continueLetter';
        }
    }
}
module.exports = LetterAction;
