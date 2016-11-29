'use strict'

class Barcode{
    constructor(){
        this.name='barcode';
        this.help="1-条码转邮编\nq-退出";
    }
    doAction(cmd){
        switch (cmd) {
            case '1':
                return 'barcodeToZipcode';
            case 'q':
                return 'init';
            default:
                console.log("无效的输入");
                return 'barcode';
        }
    }
}
module.exports=Barcode;