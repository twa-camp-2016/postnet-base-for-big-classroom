/**
 * Created by lucky on 16-8-1.
 */
const ZipCodeToBarcode = require("../core/ZipCodeToBarCode");

const zipCode = new ZipCodeToBarcode();

let req = require('superagent');
let help=require("../router/help");

class ZipCodesAction {
    constructor() {
        this.name = 'postcode';
    }

    doAction(cmd, outputAndQuit,currentName) {
        switch (cmd) {
            case 'q':
                currentName.value='init';
                help(input=>console.log(input));
                outputAndQuit("What is your choice,now?");
                break;
            default:
                req
                    .get('http://localhost:5000/zipCode')
                    .query({code: cmd})
                    .end(function (err, res) {
                        outputAndQuit(res.text);
                        outputAndQuit('please input postcode(press q to quit):');
                        currentName.value='postcode';
                    });
                break;
        }
    }
}

module.exports = ZipCodesAction;