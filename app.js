'use strict';
const router = require('./router.js');
const repl = require('repl');

router.start();

let replServer = repl.start({prompt: '> ', eval: handleInput});

function handleInput(cmd, context, fileName, callback) {
    //router.start();
    router.handle(cmd.trim());
    router.start();
    callback();
}
