/**
 * Created by lucky on 16-8-1.
 */
'use strict';
const BarcodeToZipCode = require("../core/BarcodeToZipCode");

const barcode = new BarcodeToZipCode();

let req = require('superagent');

class BarcodesAction {
    constructor() {
        this.name = 'barcode';
        this.help = `Please input barcode(press 'q' to quit)`.trim()
    }

    // doAction(cmd) {
    //     switch (cmd) {
    //         case 'q':
    //             return 'init';
    //         default:
    //             const result = barcode.covertToZipCodes(cmd);
    //             if (result.data === undefined) {
    //                 console.log('error:' + result.error);
    //             }
    //             else if (result.error === undefined) {
    //                 console.log('zipCode:' + result.data);
    //             }
    //             return 'barcode';
    //     }
    // }
    doAction(cmd,outputAndQuit) {
        switch (cmd) {
            case 'q':
                return 'init';
            default:
              req
                  .get('http://localhost:7000/barcode')
                  .query({code:cmd})
                  .end(function (err,res) {
                      outputAndQuit(res.text);
                  });
                return 'barcode';
        }

    }
}


module.exports = BarcodesAction;