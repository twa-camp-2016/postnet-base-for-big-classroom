/**
 * Created by wanggenwang on 16-8-1.
 */
let ZIPTransformer = require('../core/ZIPTransformer.js');

class PostcodeAction {
    constructor() {
        this.name = 'postcode';
        this.help = `
Please input postcode
or input q to quit:`.trim();
    };

    doAction(cmd) {
        switch (cmd) {
            case 'q':
                return 'init';
                break;
            default:
                console.log(cmd + ' => ' + (new ZIPTransformer).ZIPToBarcode(cmd));
                return 'postcode';
        }
    }
}
module.exports = PostcodeAction;

