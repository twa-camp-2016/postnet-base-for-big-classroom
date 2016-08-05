/**
 * Created by zhangyiru on 16-8-1.
 */
'use strict'
const agent = require("superagent");
let help = require('../help')
class ToBarCodeAction {
    constructor() {
        this.name = 'postcode';
    }

    doAction(cmd, output, currentActionName) {
        switch (cmd) {
            case "1":
                output("Goodbye")
                process.exit();
                break;
            case "2":
                currentActionName.value = 'init';
                help(output);
                break;
            default:
                agent
                    .get("localhost:3006/barcode")
                    .query({code: cmd})
                    .end(function (err, res) {
                        output(res.text);
                        help(output);
                        currentActionName.value = 'init';
                    })
                break;
        }
    }
}
;

/*const postAppCore = require(".././postCodeToBarCode");
 const agent = require("superagent");
 let tobar = new postAppCore;
 class ToBarCodeAction {
 constructor() {
 this.name = 'postcode';
 this.help = `
 1.退出
 2.返回上一层
 3.请输入邮编：`;
 }

 doAction(cmd) {
 switch (cmd) {
 case "1":
 process.exit();
 break;
 case "2":
 return 'init';
 break;
 default:
 const barcode = tobar.zipCodeToBarCode(cmd);
 console.log(barcode);
 return 'init';
 break;
 }
 }
 }*/
module.exports = ToBarCodeAction;