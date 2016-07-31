/**
 * Created by liuru on 16-7-29.
 */
const createAction = require('./routerAction.js');
const name = `barcodeTransformPost`;
const help = `
       ----1-inputBarcode
       ----2-return init
       ----q-exist`.trim();
class barcodeAction extends createAction {
    constructor(name, help) {
        super(name, help);
    }

    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'inputBarcode';
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
module.exports = new barcodeAction(name, help);
