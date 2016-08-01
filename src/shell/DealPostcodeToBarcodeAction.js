const PostcodeToBarcode = require('../core/PostcodeToBarcode.js');
class DealPostcodeToBarcode {
    constructor() {
        this.name = 'dealPostcodeToBarcode';
        this.help = ' * 请输入 ：';
    }

    doAction(cmd) {
        let result = new PostcodeToBarcode().printBarcode(cmd);

        if (!result) {
            result = 'Error! 输入条码有误.\n';
        }
        console.log(result);
        return 'postcodeToBarcode'
    }
}
module.exports = DealPostcodeToBarcode;
