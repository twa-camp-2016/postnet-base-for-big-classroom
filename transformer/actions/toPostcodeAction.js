/**
 * Created by tong on 16-7-29.
 */
'use strict';

const createAction = require('./createAction');

const name = 'barcodeToPostcode';
const help = '\t\t-------------------------\n' +
        '\t\t||\t条码转邮编首页\n' +
        '\t\t|| 1---input the barcode\n' +
        '\t\t|| 2---back to previous\n' +
        '\t\t|| q---exit\n' +
        '\t\t-------------------------\n' +
        'Please input your number:';

class toPostcodeAction extends createAction {
  constructor(name, help) {
    super(name, help);
  }

  doAction(cmd) {
    switch (cmd) {
      case '1':
        return 'input barcode';
      case '2':
        return 'init';
      case 'q':
        process.exit(0);
        return;
      default:
        console.log("无效的输入");
        return 'barcodeToPostcode';
    }
  }
}

module.exports = new toPostcodeAction(name, help);
/*

 module.exports = {
 name: 'barcodeToPostcode',
 help: '\t\t-------------------------\n' +
 '\t\t||\t条码转邮编首页\n' +
 '\t\t|| 1---input the barcode\n' +
 '\t\t|| 2---back to previous\n' +
 '\t\t|| q---exit\n' +
 '\t\t-------------------------\n' +
 'Please input your number:',
 doAction: function (cmd) {
 switch (cmd) {
 case '1':
 return 'input barcode';
 case '2':
 return 'init';
 case 'q':
 process.exit(0);
 return;
 default:
 console.log("无效的输入");
 return 'barcodeToPostcode';
 }
 }
 };*/
