/**
 * Created by zhangyiru on 16-8-1.
 */

'use strict';
class InitAction {
    constructor() {
        this.name = 'init';
    }

    doAction(cmd, output, currentActionName) {
        switch (cmd) {
            case'1':
                output('1.退出  2.返回上一层   请输入邮编：');
                currentActionName.value = 'postcode';
                break;
            case'2':
                output('1.退出  2.返回上一层  请输入条形码：');
                currentActionName.value = 'barcode';
                break;
            case'3':
                output('bye');
                process.exit();
                break;
            default:
                output('error');
                currentActionName.value = 'init';
                break;

        }
    }
}

module.exports = InitAction;