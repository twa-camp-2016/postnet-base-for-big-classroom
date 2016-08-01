/**
 * Created by liuru on 16-7-29.
 */
const CreateAction = require('./RouterAction.js');
const name = `BarcodeTransformPost`;
const help = `
       ----1-inputBarcode
       ----2-return init
       ----q-exist`.trim();
class BarcodeAction extends CreateAction {
    constructor(name, help) {
        super(name, help);
    }

    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'InputBarcode';
            case '2':
                return 'init';
            case 'q':
                process.exit(0);
            default:
                console.log("无效的输入");
                return 'init'
        }
    }
}
module.exports = new BarcodeAction(name, help);
