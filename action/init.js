'use strict'
const createAction = require("./createAction.js");
//init:函数名
//init（）：  调用函数返回了
module.exports = function () {
    return createAction('init',
        "Welcome:\n1-barcode\n2-zipCode\nq-退出"
         ,init);//函数作为 参数传入
};

function init(cmd) {
    switch (cmd) {
        case '1':
            return 'barcode';
        case '2':
            return 'zipCode';
        case 'q':
            process.exit(0);
        default:
            console.log("无效的输入");
            return 'init';
    }
}
