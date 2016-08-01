
'use strict';
const postAppCore = require('../core/Barcode');
class InitAction {
    constructor() {
        this.name = 'init';
        this.help = '请选择功能:1.邮编转编码 2.编码转邮编 3.退出';
    }

    doAction(cmd) {
        switch (cmd) {
            case'1':
                return 'zipcode';
            case'2':
                return 'barcode';
            case'3':
                console.log('bye');
                // replServer.close();
                process.exit(0);
            default:
                console.log('error');
                return 'init';

        }
    }
}

module.exports = InitAction;