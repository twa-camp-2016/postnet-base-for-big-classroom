/**
 * Created by tong on 16-7-29.
 */
'use strict';

const superAgent = require('../client/client');

class InputPostcodeAction {

  constructor() {
    this.name = 'inputpostcode';
    this.help = '\n\n\t\t\t邮编转条码\nPlease input your postcode(q to exit):';
  }

  doAction(cmd) {
    if (cmd === 'q') {
      return 'postcodeToBarcode';
    }

    superAgent(this.name, cmd);
    return 'inputpostcode';
  }
}
module.exports = InputPostcodeAction;

/*
 const PostcodeToBarcode = require('./../core/PostcodeToBarcode');
 let postCodeToBarcode = new PostcodeToBarcode();

 class InputPostcodeAction {

 constructor() {
 this.name = 'inputpostcode';
 this.help = '\n\n\t\t\t邮编转条码\nPlease input your postcode(q to exit):';
 }

 doAction(cmd) {
 if (cmd === 'q') {
 return 'postcodeToBarcode';
 }

 console.log("The result is:");
 console.log(postCodeToBarcode.transferToBarcode(cmd.trim()));
 return 'inputpostcode';
 }
 }
 module.exports = InputPostcodeAction;
 */
