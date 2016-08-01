/**
 * Created by tong on 16-7-29.
 */
'use strict';

class PostcodeAction {
  constructor() {
    this.name = 'barcodeToPostcode';
    this.help = '\t\t-------------------------\n' +
            '\t\t||\t条码转邮编首页\n' +
            '\t\t|| 1---input the barcode\n' +
            '\t\t|| 2---back to previous\n' +
            '\t\t|| q---exit\n' +
            '\t\t-------------------------\n' +
            'Please input your number:';
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

module.exports = PostcodeAction;