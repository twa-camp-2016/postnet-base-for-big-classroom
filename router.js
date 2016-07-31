'use strict';
/*global require,module,process*/

const obj = require("./src/letter");

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
                process.exit();
            default:
                console.log('Input error\n');
        }
    }
}, {
    name: 'postcode',
    help: `
    Please input postcode(Input q exit):`.trim(),
    doAction(postcode) {
        if(postcode === 'q'){
            currentActionName = 'init';
        }else {
            if(obj.main1(postcode)===undefined){
                console.log("This postcode is error!");
            }else {
                console.log('I\'m converting the postcode: ' + postcode);
                console.log('This is the correct barcode: ' + obj.main1(postcode));
            }
        }
    }
}, {
    name: 'barcode',
    help: `
    Please input barcode(Input q exit):`.trim(),
    doAction(barcode) {
        if(barcode === 'q'){
            currentActionName = 'init';
        }else {
            if(obj.main2(barcode) === undefined){
                console.log("This barcode is error!");
            }else {
                console.log('I\'m converting the barcode: ' + barcode);
                console.log('This is the correct postcode: ' + obj.main2(barcode));
            }
        }
    }
}
];

const router = {
    handle(cmd) {
        actions.find(v => v.name === currentActionName).doAction(cmd);
    },

    start() {
        console.log(actions.find(v => v.name === currentActionName).help);
    }
};

module.exports = router;