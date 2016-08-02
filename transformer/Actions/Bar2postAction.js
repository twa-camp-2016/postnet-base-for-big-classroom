/**
 * Created by hxc on 16-7-29.
 */
/**
 * Created by hxc on 16-7-29.
 */
const barcode = require('../core/BarcodeTransformer');
var request=require('sync-request');

function getBody(encoding) {
    if (this.statusCode >= 300) {
        var err = new Error('Server responded with status code ' + this.statusCode + ':\n' + this.body.toString(encoding));
        err.statusCode = this.statusCode;
        err.headers = this.headers;
        err.body = this.body;
        throw err;
    }
    return encoding ? this.body.toString(encoding) : this.body;
}

class BarcodeAction {
    constructor(name, help) {
        this.name = name;
        this.help = help;
    }

    doAction(cmd) {
        switch (cmd) {
            case 'q':
                return 'init';
            default:
                var res = request('POST', 'http://localhost:3000/barcodeTransfomer', {
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: `cmd=${cmd}`
                });
                console.log(res.getBody().toString());
                return 'barcode2Post';
        }
    }
}

module.exports = new BarcodeAction('barcode2Post', '请输入条码,退出请按q');


