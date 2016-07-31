'use strict';
const postcodeTraBarcode = require('./src/post-bar');
const barcodeTraPostcode = require('./src/bar-post');

let currentAction = 'init';

let actions = [{
    name: 'init',
    help: `
\n\t\t\t\t     *************
\t\t\t\t     * WELCOME^V^*    
\t\t\t\t     *-1.postcode*
\t\t\t\t     *-2.barcode *
\t\t\t\t     *-q.exit    *
\t\t\t\t     *************`,
    doAction(cmd){
        switch (cmd) {
            case '1':
                currentAction = 'postcodeInterface';
                break;
            case  '2':
                currentAction = 'barcodeInterface';
                break;
            case 'q':
                process.exit(0);
            default:
                console.log('无效的输入！请重新选择-V_V-\n');
        }
    }
},{
    name: 'postcodeInterface',
    help: `
\n\t\t\t\t*************************
\t\t\t\t*    pleale choice!     *
\t\t\t\t*-1.postcodeTraBarcode  *
\t\t\t\t*-2.back                *
\t\t\t\t*-q.exit                *
\t\t\t\t*************************`,

    doAction(cmd){
        switch (cmd) {
            case '1':
                currentAction = 'postcode';
                break;
            case '2':
                currentAction = 'init';
                break;
            case 'q':
                process.exit(0);
            default:
                console.log('无效的输入！请重新选择-V_V-\n');
        }
    }

}, {
    name: 'postcode',
    help: '\nplease input the postcode(eg:12345或123456789或12345-6789)/(back:b):',
    doAction(cmd){
        if (cmd === 'b') {
            currentAction = 'postcodeInterface';
        }
        else {
            console.log('\nthe barcode is ' + postcodeTraBarcode.zipcodeTraBarcode(cmd) + '\n');
            currentAction='continuePost'
        }
    }
}, {
    name: 'continuePost',
    help: 'is continue?(y/n)',
    doAction(cmd){
        if (cmd === 'y') {
            currentAction = 'postcode';
        } else {
            currentAction = 'postcodeInterface';
        }
    }
}, {
        name: 'barcodeInterface',
        help: `
\n\t\t\t\t*************************
\t\t\t\t*    pleale choice!     *
\t\t\t\t*-1.barcodeTraPostcode  *
\t\t\t\t*-2.back                *
\t\t\t\t*-q.exit                *
\t\t\t\t*************************`,
        doAction(cmd){
            switch (cmd) {
                case '1':
                    currentAction = 'barcode';
                    break;
                case '2':
                    currentAction = 'init';
                    break;
                case 'q':
                    process.exit(0);
                    break;
                default:
                    console.log('无效的输入！请重新选择-V_V-\n');
            }
        }
    }, {
        name: 'barcode',
        help: "please input the barcode(include '|'或':'或' ')(back:b):",
        doAction(cmd){
            if (cmd === 'b') {
                currentAction = 'barcodeInterface';
            } else {
                console.log('\nthe postcode is ' + barcodeTraPostcode.barcodeTraZipcode(cmd) + '\n');
                currentAction='continueBar';
            }
        }
    }, {
        name: 'continueBar',
        help: 'is continue?(y/n)',
        doAction(cmd){
            if (cmd === 'y') {
                currentAction = 'barcode';
            } else {
                currentAction = 'barcodeInterface';
            }
        }
    }];
const router = {
    handle(cmd){
        actions.find((item)=>item.name === currentAction).doAction(cmd);
    },
    start(){
        console.log(actions.find((item)=>item.name === currentAction).help);
    }
}
module.exports = router;
