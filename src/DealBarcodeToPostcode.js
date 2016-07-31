const pos = require('../src/pos.js');
class DealBarcodeToPostcode {
    constructor() {
        this.name = 'dealBarcodeToPostcode';
        this.help = ' * 请输入 ：';
    }

    doAction(cmd) {
        let result = pos.printPostCode(cmd);

        if (!result) {
            result = 'Error! 输入条码有误.\n';
        }
        console.log(result);
        return 'barcodeToPostcode'
    }
}
module.exports = DealBarcodeToPostcode;
