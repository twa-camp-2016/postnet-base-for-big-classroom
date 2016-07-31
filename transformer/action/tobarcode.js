/**
 * Created by zhangsha on 16-7-29.
 */

const createAction = require('./routerAction');
const transform2 = require('../transformToBarcode');
let transformBarcode = new transform2();


let name = '输入邮编';
let help = '请输入合法的邮编';

class toBarcode extends createAction{
    constructor(name, help){
        super(name, help);
    }

    doAction(cmd){
        console.log(transformBarcode.transformToBarcode(cmd));
        return '邮编转条码';
    }
}

module.exports = new toBarcode(name, help);