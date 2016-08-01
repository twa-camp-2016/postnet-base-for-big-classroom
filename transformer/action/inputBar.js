'use strict'
const createAction=require('./routeAction.js');
const method = require('../../transformer/postcode2Barcode.js');

function input_bar(cmd) {
    switch(cmd) {
        case '1':return('barcode->z');
        case '2':return('init');
        case 'q':
            process.exit(0);
        default:
            console.log('邮编：');
            console.log(method.dealBarcode(cmd));
            console.log('\n');
            return 'input_barcode'
    }    
}

module.exports=function () {
    return createAction( 'input_barcode', "请输入条码（例如| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |）" +
    '或者:\n' +
    '1.回到上层\n' +
    '2.回到首页\n' +
    'q.退出\n',input_bar);
}