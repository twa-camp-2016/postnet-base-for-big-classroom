'use strict'
const postnet=require('./../src/barcodeTranferZipcode.js');

class BarcodeToZipcode{
    constructor(){
        this.name='barcodeToZipcode';
        this.help="请输入条码 :\n或者1-返回上一层\n2-返回首页";
    }
    doAction(cmd){
        switch (cmd) {
            case '1':
                return 'barcode';
            case '2':
                return 'init';

            default:
                /*let result = postnet.barcodeChangeZipcode(cmd);
                console.log(result);*/
                let result=new postnet();
                console.log(result.execute(cmd)._info);
                return 'barcodeToZipcode';
        }
    }
}
module.exports=BarcodeToZipcode;