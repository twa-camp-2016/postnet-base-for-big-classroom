"use strict";

class PostcodeActions {
    constructor() {
        this.name = "postcode";
        this.help = `
1 - input postcode
2 -return to last item
q -quit`.trim();
    }

    doAction(cmd) {
        switch (cmd) {
            case "1":
                return 'postcodeToBarcode';
            case "2":
                return 'init';
            case"q":
                process.exit(0);
            default:
                console.log('Input error\n');
        }
    }
}

module.exports = PostcodeActions;
