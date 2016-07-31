/**
 * Created by ritter on 16-7-28.
 */
'use strict';

const repl = require('repl');
const initAction = require('./actions/initAction')
const postAction = require('./actions/postAction')
const barcodeAction = require('./actions/barcodeAction')

const actions = [initAction, postAction, barcodeAction];

let currentAction = 'init';
console.log(actions.find(item => item.name === currentAction).help);

var replServer = repl.start({prompt: "> ", eval: handleCmd});

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

