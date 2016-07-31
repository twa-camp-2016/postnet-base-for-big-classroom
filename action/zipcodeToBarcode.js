'use strict'
let createAction=require('./createAction.js');
let postnet = require('../src/postnet.js');
module.exports=function () {
    return createAction('zipcodeToBarcode',
        `请输入数字（只能五位或九位或九位带‘-’）\n或者1-返回上一层\n2-返回首页`, zipcodeToBarcode);
};

function zipcodeToBarcode(cmd) {
    switch (cmd){
        case '1':
            return 'zipCode';
        case '2':
            return 'init';
      
        default:
            let result=postnet.zipcodeChangeBarcode(cmd);
            console.log(result);
            return 'zipcodeToBarcode';
    }
}