/**
 * Created by wt on 16-8-1.
 */
/*global require*/
const changeToBarcode = require('../src/ZIPToBarcode');
const req=require('superagent');
const barcode = new changeToBarcode();
class ZIPToBarcodeAction {
    constructor() {
        this.name = 'ZIPToBarcode';
        this.help = `Please input ZIP:`.trim();
    }

    doAction(cmd,output) {
        if (cmd === 'q') {
            return 'init';
        }
        else {
           // let temp;
            console.log('I\'m converting the barcode: ' + cmd);
            req
                .get('localhost:5000/ZIP')
                .end(function (err,res) {
                    output(res.text);
                });
          /*  if(temp.error===undefined){
                output(temp.data);
            }
            else{
                output(temp.error);
            }
*/            return 'ZIPToBarcode';
        }
    }
}
module.exports = ZIPToBarcodeAction;