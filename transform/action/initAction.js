'use strict'
const a=require('../postNet');
class InitAction{
    constructor(){
        this.name='init';
        this.help='1-number 2-letter q-退出';
    }
    doAction(cmd){
        switch(cmd) {
            case '1':
                return 'number';
            case '2':
                return 'letter';
            case 'q':
                process.exit(0);
                return;
            default:
                console.log("无效的输入,请重新输出：");
                return 'init';
        }}
}
module.exports=InitAction;