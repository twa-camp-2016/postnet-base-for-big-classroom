/**
 * Created by lucky on 16-7-29.
 */
'use strict';
/*global module ,process*/

//noinspection JSUnresolvedFunction

const obj = require('./src/posnet.js');

let currentActionName = 'init';


const action = [{
    name: 'init',
    help: `
~~~~~~~~~Welcome~~~~~~~
1 - barcode to postcode
2 - postcode to barcode
3 - exit
~~~~~~~~~~~~~~~~~~~~~~~`.trim(),
    doAction(cmd){
        switch (cmd) {
            case '1':
                currentActionName = 'barcode';
                break;
            case '2':
                currentActionName = 'postcode';
                break;
            case '3':
                process.exit();
                break;
            default :
                console.log('Input error');
                break;
        }
    }
}, {
    name: 'barcode',
    help: `
Please input barcode(press 'q' to quit)`.trim(),
    doAction(cmd){
        switch (cmd) {
            case 'q':
                currentActionName='init';
                break;
            default:
                console.log('the barcode:' + cmd);
                console.log('the postcodes is:' + obj.covertToZipCodes(cmd));
        }
    }
}, {
    name: 'postcode',
    help: `
Please input postcode(press 'q' to quit)`.trim(),
    doAction(cmd){
        switch (cmd) {
            case 'q':
                currentActionName='init';
                break;
            default:
            console.log('the postcode:' + cmd);
            console.log('the barcodes is:' + obj.covertToBarcode(cmd));
        }
    }
}];


const router = {
    handle(cmd){
        action.find(v => v.name === currentActionName).doAction(cmd);
    },

    start(){
        console.log(action.find(v=>v.name === currentActionName).help);
    }
};


module.exports = router;