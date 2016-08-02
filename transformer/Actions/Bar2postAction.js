/**
 * Created by hxc on 16-7-29.
 */
/**
 * Created by hxc on 16-7-29.
 */
const barcode = require('../core/BarcodeTransformer');
const request=require('superagent');

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
                request
                    .post('http://localhost:3000/barcodeTransfomer')
                    .type('form')
                    .send({cmd:cmd.trim()})
                    .set('Accept', 'application/json')
                    .end(function(err,res){
                        if(err) throw err;
                        if (res.ok) {
                            console.log('转换结果: ' + JSON.stringify(res.body));
                        } else {
                            console.log('Oh no! error ' + res.text);
                        }
                    });
                return 'barcode2Post';
        }
    }
}

module.exports = new BarcodeAction('barcode2Post', '请输入条码,退出请按q');


