/**
 * Created by tong on 16-7-29.
 */
'use strict';

const pTob = require('../postcodeToBarcode');
const createAction = require('./createAction');

const name = 'input postcode';
const help = '\n\n\t\t\t邮编转条码\nPlease input your postcode(q to exit):';

class inputPostcodeAction extends createAction {
  constructor(name, help) {
    super(name, help);
  }

  doAction(cmd) {
    if (cmd === 'q') {
      return 'postcodeToBarcode';
    }
    console.log("The result is:");
    console.log(pTob.transferToBarcode(cmd.trim()));
    return 'input postcode';
  }
}
module.exports = new inputPostcodeAction(name, help);
/*

 module.exports = {
 name: 'input postcode',
 help: "\n\n\t\t\t邮编转条码\nPlease input your postcode(q to exit):",
 doAction: function (cmd) {
 if (cmd === 'q') {
 return 'postcodeToBarcode';
 }
 console.log("The result is:");
 console.log(pTob.transferToBarcode(cmd.trim()));
 return 'input postcode';
 }
 };*/
