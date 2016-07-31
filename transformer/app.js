/**
 * Created by zhangsha on 16-7-29.
 */
'use strict';
const init = require('./action/initAction');
const tobarcode = require('./action/toBarcodeSelect');
const toPostcodSelect = require('./action/toPostCodeSelect');
const barcodeTopostcode = require('./action/topostcode');
const postcodeTobarcode = require('./action/tobarcode');

const repl = require('repl');

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

const actions = [init, toPostcodSelect, barcodeTopostcode, tobarcode, postcodeTobarcode];

let currentAction = 'init';
console.log(actions.find(item => item.name === currentAction).help);

