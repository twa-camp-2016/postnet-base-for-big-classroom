'use strict';

const repl = require('repl');//

const InitAction = require('./InitAction');
const BarcodeToPostcodeAction = require('./BarcodeToPostcodeAction.js');
const PostcodeToBarcodeAction = require('./PostcodeToBarcodeAction.js');
const DealBarcodeToPostcode = require('./DealBarcodeToPostcode.js');
const DealPostcodeToBarcode = require('./DealPostcodeToBarcode.js');

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


const actions = [
    new InitAction(),
    new BarcodeToPostcodeAction(),
    new PostcodeToBarcodeAction(),
    new DealBarcodeToPostcode(),
    new DealPostcodeToBarcode()

];

let currentAction = 'init';
console.log(actions.find(item => item.name === currentAction).help);
module.exports = {
    actions:actions
}

