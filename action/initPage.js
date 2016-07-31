/**
 * Created by fcc on 16-7-31.
 */
'use strict';
class init {
    constructor() {
        this.name = 'init';
        this.help = '初始化界面:\n1-欢迎界面\nq-退出\n请输入：';
    }
    doAction(cmd) {
        switch (cmd) {
            case '1':
                console.log("welcome to here,Please select:");
                return 'changePage';
            case 'q':
                // replServer.close();
                process.exit(0);
            // return;
            default:
                console.log("Please enter the correct number：");
                return 'init'
        }
    }

}
module.exports = init;