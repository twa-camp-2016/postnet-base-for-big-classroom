/**
 * Created by wanggenwang on 16-7-29.
 */
'use strict';
//noinspection JSUnresolvedFunction
const Router = require('./Router.js');
//noinspection JSUnresolvedFunction,NodeJsCodingAssistanceForCoreModules
const repl = require('repl');

let router=new Router;

router.start();

repl.start({prompt: '> ', eval: handleInput});

function handleInput(cmd, context, filename, callback) {
    router.handle(cmd.trim());
    router.start();
    callback();
}









