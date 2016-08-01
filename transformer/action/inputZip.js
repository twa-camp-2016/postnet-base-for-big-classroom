'use strict'
const createAction=require('./routeAction.js');
const method = require('../../transformer/postcode2Barcode.js');
function input_zip(cmd) {
    switch(cmd) {
        case '1':return('zipcode->b');
        case '2':return('init');
        case 'q':process.exit(0);
        default:
            console.log('条码：');
            console.log(method.dealZipcode(cmd));
            console.log('\n');
            return 'input_zipcode'
    }
}

module.exports=function () {
    return createAction( 'input_zipcode',
      '请输入邮编(例如：12345，或者123456789，或者12345-1234)：\n' +
    '或者:\n' +
    '1.回到上层\n' +
    '2.回到首页\n' +
    'q.退出\n',input_zip);
}