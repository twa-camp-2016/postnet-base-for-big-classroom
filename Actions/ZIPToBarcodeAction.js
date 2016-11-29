/**
 * Created by wt on 16-8-1.
 */
/*global require,module*/
const req = require('superagent');
const help = require('./help.js');
class ZIPToBarcodeAction {
    constructor() {
        this.name = 'ZIPToBarcode';
    }

    doAction(cmd, output, currentName) {
        if (cmd === 'q') {
            currentName.value = 'init';
            output('Bye~Bye');
            help(input=>console.log(input));
        }
        else {
            req
                .get('localhost:3000/Barcode')
                .query({code: cmd})
                .end(function (err, res) {
                    output('output the transformed barcode:');
                    output(res.text);
                    output('Please input zip code');
                    currentName.value = 'ZIPToBarcode';
                });
        }
    }
}
module.exports = ZIPToBarcodeAction;