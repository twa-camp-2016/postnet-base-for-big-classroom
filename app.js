'use strict';

const repl = require('repl');

const init = require('./action/init.js');
const barcode = require('./action/barcode.js');
const zipCode = require('./action/zipCode.js');
const barcodeToZipcode = require('./action/barcodeToZipcode.js');
const zipcodeToBarcode = require('./action/zipcodeToBarcode.js');

function switchRouter(context, done) {
    let router = actions.find(item => item.name === currentAction);
    let result = router.doAction(context.cmd);

    let newRouter = actions.find(item => item.name === result);
    currentAction = newRouter.name;
    console.log(newRouter.help);
    done(null);
}

function handleCmd(cmd, context, filename, done) {
    switchRouter({
        cmd: cmd.trim()
    }, done);
    done(null);
}

var replServer = repl.start({prompt: "> ", eval: handleCmd});

const actions = [init(), barcode(), zipCode(), zipcodeToBarcode(), barcodeToZipcode()];

let currentAction = 'init';
//当前的 ：currentAction
console.log(actions.find(item => item.name === currentAction).help);



