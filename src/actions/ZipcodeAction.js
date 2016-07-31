/**
 * Created by afaren on 7/29/16.
 */
const printConvertResult = require('../formatPrint');
import {zipcodeToBarcode} from '../core/postnet';

class ZipcodeAction {
  constructor() {
    this.name = 'zipcode';
    this.help = 'input a zipcode to convert, entry \'q\' to return previous';
  }

  doAction(cmd) {
    switch (cmd) {
      case 'q':
        return 'init';
      default:
        console.log('result: ');
        printConvertResult(zipcodeToBarcode(cmd));
        return 'init';
    }
  }
}
module.exports = ZipcodeAction;
