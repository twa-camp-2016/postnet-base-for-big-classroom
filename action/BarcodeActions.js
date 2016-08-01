"use strict";

class BarcodeActions {
    constructor() {
        this.name = 'barcode';
        this.help = `
1 - input barcode
2 -return to last item
q -quit`.trim();
    }

    doAction(cmd) {
        switch (cmd) {
            case "1":
                return 'barcodeToPostCode';
            case "2":
                return 'init';
            case"q":
                process.exit(0);
            default:
                console.log('Input error\n');
        }
    }

}

module.exports = BarcodeActions;