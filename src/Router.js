/**
 * Created by wanggenwang on 16-7-29.
 */
'use strict';
let ZIPTransformer = require('./core/ZIPTransformer.js');
let BarcodeTransformer = require('./core/BarcodeTransformer.js');

let currentActionName = 'init';

const actions = [{                                       //actions
    name: 'init',                                              //name:'init'
    help: `
Welcome
1 - postcode
2 - barcode
3 - quit`.trim(),
    doAction(cmd) {
        switch (cmd) {
            case '1':
                currentActionName = 'postcode';
                break;
            case '2':
                currentActionName = 'barcode';
                break;
            case '3':
                process.exit();
            default:
                console.log('Input error\n');
        }
    }
}, {                                                          //name:'postcode'
    name: 'postcode',
    help: `
Please input postcode
or input q to quit:`.trim(),
    doAction(cmd) {
        switch (cmd) {
            case 'q':
                currentActionName = 'init';
                break;
            default:
                console.log(cmd + ' => ' + (new ZIPTransformer).ZIPToBarcode(cmd));
        }
    }
}, {                                                          //name:'barcode'
    name: 'barcode',
    help: `
Please input barcode
or input q to quit:`.trim(),
    doAction(cmd){
        switch (cmd) {
            case 'q':
                currentActionName = 'init';
                break;
            default:
                console.log(cmd + ' => ' +(new BarcodeTransformer).barcodeToZIP(cmd));
        }
    }
}];

class Router {
    handle(cmd) {
        actions.find(v => v.name === currentActionName).doAction(cmd);
    }
    start() {
        console.log(actions.find(v => v.name === currentActionName).help);
    }
}


module.exports = Router;


