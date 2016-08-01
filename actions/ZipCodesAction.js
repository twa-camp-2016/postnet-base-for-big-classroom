/**
 * Created by lucky on 16-8-1.
 */
const ZipCodeToBarcode = require("../core/ZipCodeToBarCode");

const zipCode = new ZipCodeToBarcode();


class ZipCodesAction {
    constructor() {
        this.name = 'postcode';
        this.help = `Please input postcode(press 'q' to quit)`.trim()
    }

    doAction(cmd) {
        switch (cmd) {
            case 'q':
                return 'init';
            default:
                const result = zipCode.covertToBarcode(cmd);
                if (result.data === undefined) {
                    console.log('error:' + result.error);
                }
                else if (result.error === undefined) {
                    console.log('barcode:' + result.data);
                }
                return 'postcode'
        }
    }
}

module.exports = ZipCodesAction;