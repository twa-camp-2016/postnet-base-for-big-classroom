'use strict'

class ZipCode{
    constructor (){
        this.name='zipCode';
        this.help="1-邮编转条码\n2-返回上一层";
    }
    doAction(cmd){
        switch (cmd) {
            case '1':
                return 'zipcodeToBarcode';
            case '2':
                return 'init';
            default:
                console.log("无效的输入");
                return 'zipCode'
        }
    }
}
module.exports=ZipCode;