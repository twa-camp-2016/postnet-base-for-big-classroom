/**
 * Created by tong on 16-7-29.
 */
'use strict';

const BarcodeToPostCode = require('./../core/BarcodeToPostcode');
let barcodeToPostCode = new BarcodeToPostCode();


class InputBarcodeAction {

  constructor() {
    this.name = 'input barcode';
    this.help = '\n\n\t\t\t条码转邮编\nPlease input your barcode(q to exit):';
  }

  doAction(cmd) {
    if (cmd === 'q') {
      return 'barcodeToPostcode';
    }
    console.log("The result is:");
    console.log(barcodeToPostCode.transferToPostCode(cmd.trim()));
    return 'input barcode';
  }
}

module.exports = InputBarcodeAction;