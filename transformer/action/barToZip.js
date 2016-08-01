'use strict'

class barToZip{
    constructor(){
        this.name='barcodeToZip';
        this.help=` 
        您已进入条码转邮编状态！
        1.输入条码 
        2.返回上一层 
        q.退出`
    }

    doAction(cmd){
        switch(cmd) {
            case '1':return 'input_barcode';
            case '2':return('init');
            case 'q':
                process.exit(0);
            // case 'a':
            //     return 'number'
            default:
                console.log("无效的输入");
                return 'barcodeToZip'
        }
    }
}

module.exports=barToZip;
