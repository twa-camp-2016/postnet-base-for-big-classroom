'use strict'
class ContinueLetter{
    constructor(){
        this.name='continueLetter';
        this.help='1-继续转换条码, 2-返回上一页 ,q-退出 ';
    }
    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'letter';
            case '2':
                return 'init';
            case 'q':
                process.exit(0);
                return;
            default:
                console.log('无效输入，请重新输入：');
                return 'letter'
        }
    }
}
module.exports=ContinueLetter;