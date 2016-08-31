/**
 * Created by wangqi on 16-8-1.
 */

'use strict';
let help = require("./help");
class InitAction {
    constructor() {
        this.name = 'init';
    }

    doAction(cmd,outWord,currentState) {
        switch (cmd) {
            case'1':
                currentState.value = "zipcode";
                outWord("请选择：输入邮编或者q退出或者r返回上一层:");
                break;
            case'2':
                currentState.value = "barcode";
                outWord("请选择：输入条形码或者q退出或者r返回上一层:")
                break;
            case'3':
                outWord("byebye");
                process.exit();
                break;
            default:
                outWord('Incorrect menu options please input again.');
                currentState.value = "init";
                help(outWord);
                break;
        }
    }
}

module.exports = InitAction;