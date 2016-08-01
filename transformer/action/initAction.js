'use strict'
const createAction=require('./routeAction.js');

function do_Action(cmd) {
    switch(cmd) {
        case '1':
            return 'zipcode->b';
        case '2':
            return 'barcode->z';
        case 'q':
            process.exit(0);
            //return -1;
        default:
            console.log("无效的输入");
            return 'init'
    }
}

module.exports=function () {
    return createAction('init',"初始化界面:\n1-邮编转条码.\n2-条码转邮编\nq-exit",do_Action);
};