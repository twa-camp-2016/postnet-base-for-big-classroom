/**
 * Created by tong on 16-7-29.
 */
'use strict';

const bTop = require('../barcodeToPostcode');
const createAction = require('./createAction');

const name = 'input barcode';
const help = '\n\n\t\t\t条码转邮编\nPlease input your barcode(q to exit):';

class inputBarcodeAction extends createAction {
  constructor(name, help) {
    super(name, help);
  }

  doAction(cmd) {
    if (cmd === 'q') {
      return 'barcodeToPostcode';
    }
    console.log("The result is:");
    console.log(bTop.transferToPostCode(cmd.trim()));
    return 'input barcode';
  }
}

module.exports = new inputBarcodeAction(name, help);
