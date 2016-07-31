/**
 * Created by liuru on 16-7-29.
 */
const createAction = require('./routerAction.js');
const btp = require('../barcodeTransformPost.js');
const name = `inputBarcode`;
const help = ``;
class inputBarcode extends createAction {
    constructor(name, help) {
        super(name, help);
    }

    doAction(cmd) {
        switch (cmd) {
            case '2': {
                return 'barcodeTransformPost';
            }
            case 'q':
                process.exit(0);
            default: {
                console.log(new btp().barcodeTransformPost(cmd.trim()));
                return 'barcodeTransformPost';
            }

        }
    }
}
module.exports = new inputBarcode(name, help);
