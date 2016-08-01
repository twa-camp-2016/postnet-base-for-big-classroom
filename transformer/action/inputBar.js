'use strict'
const barcode = require('../../transformer/barcodeCore.js');

class input_bar{
    constructor(){
        this.name='input_barcode';
        this.help=
        `请输入条码
        （例如| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |）
         或者:
         1.回到上层
         2.回到首页
         q.退出`
    }

    doAction(cmd){
        switch(cmd) {
            case '1':return('barcodeToZip');
            case '2':return('init');
            case 'q':
                process.exit(0);
            default:
                console.log('邮编：');
                let barcode1=new barcode();
                console.log(barcode1.dealBarcode(cmd));
                console.log('\n');
                return 'input_barcode'
        }
    }
}

module.exports=input_bar;