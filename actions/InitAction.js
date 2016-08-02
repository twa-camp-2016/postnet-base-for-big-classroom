'use strict';
class InitAction {
    constructor() {
        this.name = 'init';
        this.help =  `
        Welcome
        1 - postcode
        2 - barcode
        3 - quit`.trim();
    }

    doAction(cmd) {
        switch (cmd) {
            case'1':
                return "postcode";
            case'2':
                return 'barcode';
            case'3':
                process.exit(0);
            default:
                return 'Input error!';
        }
    }
}

module.exports = InitAction;