"use strict"

const createAction = require('./createAction');

const name = 'init';
const help = 'init interface:\n1-post to barcode\n2-barcode to post\nq-exit';

class initAction extends createAction {

    constructor(name, help) {
        super(name, help);
    }

    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'inputPost';
            case '2':
                return 'inputBarcode';
            case 'q':
                process.exit(0);
                return;
            default:
                console.log("Invalidation Input");
                return 'init'
        }
    }
}

module.exports = new initAction(name, help);
