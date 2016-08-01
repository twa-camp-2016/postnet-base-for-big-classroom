/**
 * Created by liuru on 16-7-29.
 */
const ptb = require('../PostTransformBarcode.js');
const CreateAction = require('./RouterAction.js');
const name = `InputPost`;
const help = ``;
class InputPost extends CreateAction {
    constructor(name, help) {
        super(name, help);
    }

    doAction(cmd) {
        switch (cmd) {
            case 'p':
                return 'PostTransformBarcode';
            case 'i':
                return 'InputPost';
            default:
                console.log(new ptb().postTransformBarcode(cmd.trim()));
                return 'PostTransformBarcode';
        }
    }
}
module.exports = new InputPost(name, help);
