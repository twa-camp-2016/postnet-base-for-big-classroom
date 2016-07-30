'use strict';

const repl = require('repl');
const init = require('./action/initAction.js');
const zipToBar = require('./action/zipToBar.js');
const input_zip = require('./action/inputZip.js');
const barToZip = require('./action/barToZip');
const input_bar = require('./action/inputBar');

function switchRouter(context, done) {
    let router = actions.find(item => item.name === currentAction);
    let result = router.doAction(context.cmd);//result === 下一步的name
    let newRouter = actions.find(item => item.name === result);//newRouter是下一步的那个对象
    currentAction = newRouter.name;// 此时的currentAction就是下一步动作的名称
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
    init(),
    zipToBar(),
    input_zip(),
    barToZip(),
    input_bar()
];

let currentAction = 'init';

console.log(actions.find(item => item.name === currentAction).help);

