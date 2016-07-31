'use strict';

const repl = require('repl');
const init = require('./action/initAction.js');
const barcode = require('./action/barcodeAction.js');
const post = require('./action/postAction.js');
const inputBar = require('./action/inputBarcode.js');
const inputPo = require('./action/inputPost.js');

function switchRouter(context, done) {
    let router = actions.find(item => item.name === currentAction);
    let result = router.doAction(context.cmd);
    let newRouter = actions.find(item => item.name === result);

    currentAction = newRouter.name;
    console.log(newRouter.help);
    done(null);
}

var replServer = repl.start({prompt: "> ", eval: handleCmd});


function handleCmd(cmd, context, filename, done) {
    switchRouter(
        {
            cmd: cmd.trim()
        }, done);
    done(null);
}
const actions = [init, barcode, post, inputBar, inputPo];

let currentAction = 'init';
console.log(actions.find(item => item.name === currentAction).help);
