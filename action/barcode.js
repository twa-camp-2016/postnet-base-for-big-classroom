'use strict'
let createAction = require('./createAction.js');

function barcode(cmd) {
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
module.exports = function () {
    return createAction('barcode',
        `1-条码转邮编\nq-退出`, barcode);
}