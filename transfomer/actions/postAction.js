/**
 * Created by ritter on 16-7-29.
 */

"use strict"

const PostToBarcode = require('../postToBarcode');
const createAction = require('./createAction');

const name = 'inputPost';
const help = 'input post state:\ninput post or input q to exit';

let postToBarcode = new PostToBarcode();

class inputPost extends createAction {

    constructor(name, help) {
        super(name, help);
    }

    doAction(cmd) {
        if (cmd.trim() === 'q') {
            return 'init';
        }
        console.log(postToBarcode.changePost(cmd.trim()) + '\n\n');
        return 'inputPost';
    }
}

module.exports = new inputPost(name, help);