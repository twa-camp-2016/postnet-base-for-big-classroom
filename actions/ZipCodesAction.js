/**
 * Created by lucky on 16-8-1.
 */
const ZipCodeToBarcode = require("../core/ZipCodeToBarCode");

const zipCode = new ZipCodeToBarcode();

let req = require('superagent');

class ZipCodesAction {
    constructor() {
        this.name = 'postcode';
        this.help = `Please input postcode(press 'q' to quit)`.trim()
    }

    // doAction(cmd) {
    //     switch (cmd) {
    //         case 'q':
    //            return 'init';
    //         default:
    //             const result = zipCode.covertToBarcode(cmd);
    //             if (result.data === undefined) {
    //                 console.log('error:' + result.error);
    //             }
    //             else if (result.error === undefined) {
    //                 console.log('barcode:' + result.data);
    //             }
    //             return 'postcode'
    //
    //     }
    // }

    doAction(cmd, outputAndQuit) {
        switch (cmd) {
            case 'q':
                //return 'init';
                outputAndQuit();
                return 'init';
            default:
                req
                    .get('http://localhost:5000/zipCode')
                    .query({code: cmd})
                    .end(function (err, res) {
                        outputAndQuit(res.text);
                      //  console.log("Please input postcode(press 'q' to quit)");
                    });
                return 'postcode';
        }
    }
}

module.exports = ZipCodesAction;