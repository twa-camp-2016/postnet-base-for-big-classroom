/**
 * Created by tong on 16-7-29.
 */
'use strict';

const PostcodeToBarcode = require('../postcodeToBarcode');
let postCodeToBarcode = new PostcodeToBarcode();

class InputPostcodeAction {
  
  constructor() {
    this.name = 'input postcode';
    this.help = '\n\n\t\t\t邮编转条码\nPlease input your postcode(q to exit):';
  }

  doAction(cmd) {
    if (cmd === 'q') {
      return 'postcodeToBarcode';
    }

    console.log("The result is:");
    console.log(postCodeToBarcode.transferToBarcode(cmd.trim()));
    return 'input postcode';
  }
}
module.exports = InputPostcodeAction;
