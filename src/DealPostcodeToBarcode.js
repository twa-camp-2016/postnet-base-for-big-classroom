const pos = require('../src/pos.js');
class DealPostcodeToBarcode {
    constructor() {
        this.name = 'dealPostcodeToBarcode';
        this.help = ' * 请输入 ：';
    }

    doAction(cmd) {
        let result = pos.printBarcode(cmd);

        if (!result) {
            result = 'Error! 输入条码有误.\n';
        }
        console.log(result);
        return 'postcodeToBarcode'
    }
}
module.exports = DealPostcodeToBarcode;
