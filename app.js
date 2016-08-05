'use strict';
const repl = require('repl');

const Router = require('./router');
const InitAction = require('./src/actions/InitAction');

const initAction = new InitAction();
const router= new Router(initAction.name);

router.start();
let replServer = repl.start({prompt: '> ', eval: handleInput});

function handleInput(cmd, context, fileName, callback) {
    router.handle(cmd.trim());
    router.start();
    callback();
}