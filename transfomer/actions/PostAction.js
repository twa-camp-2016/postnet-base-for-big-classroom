/**
 * Created by ritter on 16-7-29.
 */

"use strict"

const PostToBarcode = require('../PostToBarcode');

let postToBarcode = new PostToBarcode();

class InputPost {

    constructor() {
        this.name = 'inputPost';
        this.help = 'input post state:\ninput post or input q to exit'
    }

    doAction(cmd) {
        if (cmd.trim() === 'q') {
            return 'init';
        }
        console.log(postToBarcode.changePost(cmd.trim()) + '\n\n');
        return 'inputPost';
    }
}

module.exports = InputPost;