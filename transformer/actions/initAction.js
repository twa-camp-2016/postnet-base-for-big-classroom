/**
 * Created by tong on 16-7-29.
 */
'use strict';

class InitAction {
  constructor() {
    this.name = 'init';
    this.help = '\t\t-------------------------\n' +
            '\t\t||\t    首页\n' +
            '\t\t|| 1---postcode to barcode\n' +
            '\t\t|| 2---barcode to postcode\n' +
            '\t\t|| q---exit\n' +
            '\t\t-------------------------\n' +
            'Please input your number:';
  }

  doAction(cmd) {
    switch (cmd) {
      case '1':
        return 'postcodeToBarcode';
      case '2':
        return 'barcodeToPostcode';
      case 'q':
        process.exit(0);
        return;
      default:
        console.log("无效的输入");
        return 'init'
    }
  }
}

module.exports = InitAction;