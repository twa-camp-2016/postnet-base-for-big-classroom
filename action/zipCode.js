'use strict'
let createAction = require('./createAction.js');
module.exports = function () {
    return createAction('zipCode',
    `1-邮编转条码\n2-返回上一层`, zipCode);
}

function zipCode(cmd) {
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