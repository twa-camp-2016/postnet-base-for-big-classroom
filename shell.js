/**
 * Created by lucky on 16-7-29.
 */
'use strict';
/*global repl,require*/

const router = require('./router');
const repl = require('repl');


router.start();

repl.start({prompt:'>',eval:handleInput});

function handleInput(cmd,context,filename,callback) {
    router.handle(cmd.trim());
    router.start();
    callback();
}