/**
 * Created by liuru on 16-7-29.
 */
const ptb = require('../postTransformBarcode.js');
const createAction = require('./routerAction.js');
const name = `inputPost`;
const help = ``;
class inputPost extends createAction {
    constructor(name, help) {
        super(name, help);
    }

    doAction(cmd) {
        switch (cmd) {
            case '2':
                return 'postTransformBarcode';
            case '3':
                return 'inputPost';
            default:
                console.log(new ptb().postTransformBarcode(cmd.trim()));
                return 'postTransformBarcode';
        }
    }
}
module.exports = new inputPost(name, help);
