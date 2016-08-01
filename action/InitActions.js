"use strict";

class InitActions {
    constructor() {
        this.name = 'init';
        this.help = `
        ** Welcome **
        1 - postcode
        2 - barcode
        q - quit`.trim();
    }

    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'postcode';
            case '2':
                return 'barcode';
            case'q':
                process.exit(0);
            default:
                console.log('Input error\n');
        }
    }
}

module.exports = InitActions;