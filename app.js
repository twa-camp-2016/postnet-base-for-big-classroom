'use strict';

const repl = require('repl');

const init = require('./action/init.js');
const barcode = require('./action/barcode.js');
const zipCode = require('./action/zipCode.js');
const barcodeToZipcode = require('./action/barcodeToZipcode.js');
const zipcodeToBarcode = require('./action/zipcodeToBarcode.js');

const actions = [new init(), new barcode(), new zipCode(), new barcodeToZipcode(), new zipcodeToBarcode()];
let currentAction = 'init';
console.log(actions.find(item=>item.name === currentAction).help);

function switchRouter(context, done) {
    let currRouter = actions.find(item=>item.name === currentAction);
    //路由转换
    let result = currRouter.doAction(context.cmd);
    let newRouter = actions.find(item=>item.name === result);
    //修改当前currentAction
    currentAction = newRouter.name;
    console.log(newRouter.help);
    done(null);
}

function handleInput(cmd, context, filename, done) {
    switchRouter({cmd: cmd.trim()}, done);
    done(null);

}

var replServer = repl.start({prompt: '->', eval: handleInput});