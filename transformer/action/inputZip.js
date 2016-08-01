'use strict'
const met = require('../../transformer/zipCodeCore.js');
class input_Zip{
    constructor(){
        this.name='input_zipcode';
        this.help= 
            `请输入邮编(例如：12345，或者123456789，或者12345-1234)：
             或者:
             1.回到上层
             2.回到首页
             q.退出`
    }
    
    doAction(cmd){
        switch(cmd) {
            case '1':return('zipCodeToBar');
            case '2':return('init');
            case 'q':process.exit(0);
            default:
                console.log('条码：');
                let aaa = new met();
                console.log(aaa.dealZipcode(cmd));
                console.log('\n');
                return 'input_zipcode'
        }
    }
}
module.exports=input_Zip;