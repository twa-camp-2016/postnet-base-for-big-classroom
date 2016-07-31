'use strict';
/*global require*/
const obj = require("./converter");
let currentActionName = 'init';
const actions = [{
    name: 'init',
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
                currentActionName = 'quit';
                break;
            default:
                console.log('Input error\n');
                currentActionName = 'init';
                break;
        }
    }
}, {
    name: 'postcode',
    help: `
1 - to bar code
2 - exit`.trim(),
    doAction(cmd) {
        switch (cmd) {
            case '1':
                currentActionName = 'toBarcode'
                break;
            case '2':
                currentActionName = 'init';
                break;
        }
    }
}, {
    name: 'barcode',
    help: `
1 - to post code 
2 - exit`.trim(),
    doAction(cmd){
        switch (cmd) {
            case '1':
                currentActionName = 'toPostCode';
                break;
            case '2':
                currentActionName = 'init';
                break;
        }
    }
},{
    name: 'quit',
    help: `
  Do you ensure quit this interface!!!
  'Y/N'`.trim(),
    doAction(cmd){
        console.log(cmd);
        if (cmd === "Y") {
            process.exit();
        }
        currentActionName = "init";
    }

},{
    name:'toBarcode',
    help:
    `please input post code`.trim(),
    doAction(cmd){
        console.log('I\'m convering the barcode:');
        console.log(obj.postToBar.zipCodeToBarCode(cmd));
        currentActionName = 'postcode';

    }
},{
    name:'toPostCode',
    help:
    `please input bar code`.trim(),
    doAction(cmd){
        console.log('I\'m converting the postcode: ');
        console.log(obj.barToPost.barCodeToZipCode(cmd));
        currentActionName = 'barcode';
    }
}];

const router = {
    handle(cmd) {
        actions.find(v => v.name === currentActionName).doAction(cmd);
    },

    start() {
        console.log(actions.find(v => v.name === currentActionName).help);
    }
};

module.exports = router;

