/**
 * Created by afaren on 7/29/16.
 */

'use strict';
const printConvertResult = require('../formatPrint');
import {barcodeToZipcode} from '../core/postnet';

class BarcodeAction {
  constructor() {
    this.name = 'barcode';
    this.help = 'input a barcode to convert, entry \'q\' to return previous';
  }

  doAction(cmd) {
    switch (cmd) {
      case 'q':
        return 'init';
      default:
        console.log('result: ');
        printConvertResult(barcodeToZipcode(cmd));
        return 'init';
    }

  }
}
module.exports = BarcodeAction;
