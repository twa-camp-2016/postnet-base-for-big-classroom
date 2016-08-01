/**
 * Created by liuru on 16-7-29.
 */
const CreateAction = require('./RouterAction.js');
const btp = require('../BarcodeTransformPost.js');
const name = `InputBarcode`;
const help = ``;
class InputBarcode extends CreateAction {
    constructor(name, help) {
        super(name, help);
    }

    doAction(cmd) {
        switch (cmd) {
            case 'b': {
                return 'BarcodeTransformPost';
            }
            case 'q':
                process.exit(0);
            default: {
                console.log(new btp().BarcodeTransformPost(cmd.trim()));
                return 'BarcodeTransformPost';
            }

        }
    }
}
module.exports = new InputBarcode(name, help);
