/**
 * Created by liuru on 16-7-29.
 */
const CreateAction = require('./RouterAction.js');

const name = 'init';
const help = `
        ----初始化界面:
        ----1-barcodeTransformPost
        ----2-postTransformBarcode
        ----q-exist`.trim();

class InitAction extends CreateAction {
    constructor(name, help) {
        super(name, help);
    }

    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'BarcodeTransformPost';
            case '2':
                return 'PostTransformBarcode';
            case 'q':
                process.exit(0);
            default:
                console.log("无效的输入");
                return 'init'
        }
    }
}
module.exports = new InitAction(name, help);
