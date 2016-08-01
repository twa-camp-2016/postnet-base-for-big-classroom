/**
 * Created by shiyue on 16-8-1.
 */
'use strict';

//初始化界面类
class InitAction {
    constructor() {
        this.name = 'init';
        this.help = `
\n\t\t\t\t     *************
\t\t\t\t     * WELCOME^V^*    
\t\t\t\t     *-1.postcode*
\t\t\t\t     *-2.barcode *
\t\t\t\t     *-q.exit    *
\t\t\t\t     *************`;
    }

    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'postcode';
            case  '2':
                return 'barcode';
            case 'q':
                process.exit(0);
            default:
                console.log('无效的输入！请重新选择-V_V-\n');
                return 'init';
        }
    }
}

module.exports = InitAction;
