'use strict'
let postnet=require('./../src/zipCodeTransferBarcode.js');

class ZipcodeToBarcode{
    constructor(){
        this.name='zipcodeToBarcode';
        this.help=`请输入数字（只能五位或九位或九位带‘-’）\n或者1-返回上一层\n2-返回首页`;
    }
    doAction(cmd){
        
        switch (cmd){
            case '1':
                return 'zipCode';
            case '2':
                return 'init';

            default:
                /*let result=postnet.zipcodeChangeBarcode(cmd);*/
                let result=new postnet();
                console.log(result.execute(cmd)._info);
                return 'zipcodeToBarcode';
        }
    }
}
module.exports=ZipcodeToBarcode;
