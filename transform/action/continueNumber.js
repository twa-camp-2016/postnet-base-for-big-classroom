'use strict'
class ContinueNumber{
    constructor(){
        this.name='continueNumber';
        this.help='1-继续转换编码, 2-返回上一页 ,q-退出 ';
    }
    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'number';
            case '2':
                return 'init';
            case 'q':
                process.exit(0);
                return;
            default:
                console.log('无效输入，请重新输入：');
                return 'number'
        }
    }
}
module.exports=ContinueNumber;