'use strict'

class zToBAction{
    constructor(){
        this.name='zipCodeToBar';
        this.help=
        `您已进入邮编转条码状态！
         1.输入邮编
         2.返回上一层
         q.退出`
    }

    doAction(cmd){
        switch(cmd) {
            case '1':return 'input_zipcode';
            case '2':return('init');
            case 'q':process.exit(0);
            default:
                console.log("无效的输入");
                return 'zipCodeToBar'
        }
    }
}

module.exports=zToBAction;