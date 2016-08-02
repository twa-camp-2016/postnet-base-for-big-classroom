'use strict';
const Postcode = require('../core/Postcode');
const postcode = new Postcode();
class PostcodeAction {
    constructor() {
        this.name = 'postcode';
        this.help = `
    Please input postcode(Input q exit):`.trim();
    }

    doAction(cmd) {
        if (cmd == 'q') {
            return 'init';
        }
        else if (postcode.transform(cmd) === undefined) {
           // return "This postcode is error!";
            console.log("This postcode is error!");
            return 'postcode';
        }
        else {
            /*return 'I\'m converting the postcode: ' + cmd + "\n"+
            'This is the correct barcode: ' + postcode.transform(cmd);*/
            console.log('I\'m converting the postcode: ' + cmd + "\n"+
                'This is the correct barcode: ' + postcode.transform(cmd));
            return 'postcode';
        }

    }
}
module.exports = PostcodeAction;
