'use strict'
let createAction = require('./createAction.js');
let postnet = require('../src/postnet.js');
module.exports = function () {
    return createAction('barcodeToZipcode',
        `请输入条码 :\n或者1-返回上一层\n2-返回首页`, barcodeToZipcode);
};

function barcodeToZipcode(cmd) {
    switch (cmd) {
        case '1':
            return 'barcode';
        case '2':
            return 'init';

        default:
            let result = postnet.barcodeChangeZipcode(cmd);
            console.log(result);
            return 'barcodeToZipcode';
    }
}
