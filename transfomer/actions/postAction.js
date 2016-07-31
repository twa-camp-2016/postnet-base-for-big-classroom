/**
 * Created by ritter on 16-7-29.
 */

const fnPost = require('../postToBarcode');
const createAction = require('./createAction');

const name = 'inputPost';
const help = 'input post state:\ninput post or input q to exit';

class inputPost extends createAction {

    constructor(name, help) {
        super(name, help);
    }

    doAction(cmd) {
        if (cmd.trim() === 'q') {
            return 'init';
        }
        console.log(fnPost.postToBarcode(cmd.trim()) + '\n\n');
        return 'inputPost';
    }
}

module.exports = new inputPost(name, help);