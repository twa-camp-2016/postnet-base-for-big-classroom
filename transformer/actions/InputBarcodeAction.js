/**
 * Created by tong on 16-7-29.
 */
'use strict';
const syncRequest = require('../request/syncRequest');

class InputBarcodeAction {

  constructor() {
    this.name = 'inputbarcode';
    this.help = '\n\n\t\t\t条码转邮编\nPlease input your barcode(q to exit):';
  }

  doAction(cmd) {
    if (cmd === 'q') {
      return 'barcodeToPostcode';
    }

    syncRequest(this.name, cmd);
    return 'inputbarcode';
  }
}

module.exports = InputBarcodeAction;