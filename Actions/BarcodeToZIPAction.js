/**
 * Created by wt on 16-8-1.
 */
/*global require,module*/
//const changeToZIP = require('../src/BarcodeToZIP');
let req=require('superagent');
class BarcodeToZIPAction {
    constructor() {
        this.name = 'BarcodeToZIP';
        this.help = 'Please input Barcode:'.trim();
    }
    doAction(cmd,output) {
        if (cmd === 'q') {
            return 'init';
        }
        else {
            console.log('I\'m converting the barcode: ' + cmd);
            let temp;
            req.get('localhost:3000/Barode')
                .query({code:cmd})
                .end(function (err,res) {
                    output(res.text);
                });
           /* if(temp.error===undefined){
               output(temp);
            }
            else{
               output(temp.error);
            }*/
            return 'BarcodeToZIP'
        }
    }
}
module.exports = BarcodeToZIPAction;