/**
 * Created by hxc on 16-7-29.
 */

const post = require('../core/PostcodeTransformer');
var request = require('sync-request');

class post2barAction {
    constructor(name, help) {
        this.name = name;
        this.help = help;
    }

    doAction(cmd) {

        switch (cmd) {
            case 'q':
                return 'init';
            default:

                var res = request('POST', 'http://localhost:3000/postTransformer', {
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: `cmd=${cmd}`
                });

                console.log(res.getBody().toString());
                return 'post2Barcode';
        }
    }
}

module.exports = new post2barAction('post2Barcode', '请输入邮编,退出请按q');