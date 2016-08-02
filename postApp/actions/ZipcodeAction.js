'use strict';
const Zipcode = require('../core/Zipcode');
const zipcodes = new Zipcode();
class ZipcodeAction {
    constructor() {
        this.name = 'zipcode';
        this.help = '请选择：输入邮编或者q退出或者r返回上一层:';
    }

    doAction(cmd) {
        if (cmd == 'q') {
            process.exit(0);
        }
        else if (cmd == 'r') {
            return 'init';
        }
        else {
            const barcode = zipcodes.transformToBarCode(cmd);
            console.log(barcode.value);
            return 'zipcode';
        }
    }
}
module.exports = ZipcodeAction;