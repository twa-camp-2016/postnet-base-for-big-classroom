/**
 * Created by hxc on 16-7-29.
 */
'use strict';
const post = require('./postTobarcode');
const barcode = require('./barcodeTopost');
const repl = require('repl');
const initDoAction = require('./initDoAction');
const post2bar = require('./post2barAction');
const bar2post = require('./bar2postAction');

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

const actions = [initDoAction, post2bar, bar2post];
let currentAction = 'init';
console.log(actions.find(item => item.name === currentAction).help);

var replServer = repl.start({prompt: "> ", eval: handleCmd});


