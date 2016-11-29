/**
 * Created by wt on 16-8-1.
 */
/*global require,module*/
//const changeToZIP = require('../src/BarcodeToZIP');
let help=require('./help.js');
let req=require('superagent');
class BarcodeToZIPAction {
    constructor() {
        this.name = 'BarcodeToZIP';
    }
    doAction(cmd,output,currentName) {
        if (cmd === 'q') {
            currentName.value='init';
            output('Bye~Bye');
            help(input=>console.log(input));
        }
        else {
            req.get('localhost:5000/ZIP')
                .query({code:cmd})
                .end(function (err,res) {
                    output('The transformed zip is:');
                    output(res.text);
                    output('Please input barcode:');
                    currentName.value='BarcodeToZIP';
                });
        }
    }
}
module.exports = BarcodeToZIPAction;
