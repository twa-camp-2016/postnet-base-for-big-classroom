'use strict'
class welcome{
    constructor(){
        this.name='init';
        this.help=`
        初始化界面:
        1-邮编转条码.
        2-条码转邮编
        q-exit
        `;
    }
    doAction(cmd){
        switch(cmd) {
            case '1':
                return 'zipCodeToBar';
            case '2':
                return 'barcodeToZip';
            case 'q':
                process.exit(0);
            //return -1;
            default:
                console.log("无效的输入");
                return 'init'
        }
    }
}

module.exports=welcome;

