/**
 * Created by lucky on 16-8-1.
 */
'use strict';
let req = require('superagent');
let help = require("../router/help");


class BarcodesAction {
    constructor() {
        this.name = 'barcode';
    }

    doAction(cmd, outputAndQuit, currentName) {
        switch (cmd) {
            case 'q':
                currentName.value = 'init';
                help(input=>console.log(input));
                outputAndQuit("What is your choice,now?");
                break;
            default:
                req
                    .get('http://localhost:3003/barcode')
                    .query({code: cmd})
                    .end(function (err, res) {
                        outputAndQuit(res.text);
                        outputAndQuit('please input barcode(press q to quit):');
                        currentName.value = 'barcode';
                    });
                break;
        }
    }
}


module.exports = BarcodesAction;