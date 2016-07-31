'use strict'
class  WelcomeAction {
    constructor() {
        this.name = 'welcome';
        this.help = '欢迎：任意键_进入 q_退出';
    }

    doAction(cmd) {
        switch (cmd) {
            case 'q':
                process.exit(0);
                return;
            default:
                return 'init';
        }
    }
}
module.exports=WelcomeAction;