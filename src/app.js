/**
 * Created by wanggenwang on 16-7-29.
 */
'use strict';
//noinspection JSUnresolvedFunction
const Router = require('./Router.js');
//noinspection JSUnresolvedFunction,NodeJsCodingAssistanceForCoreModules
const repl = require('repl');

let BarcodeAction = require('./actions/BarcodeAction.js');
let InitAction = require('./actions/InitAction.js');
let PostcodeAction = require('./actions/PostcodeAction.js');
let actions = [
    new BarcodeAction(),
    new InitAction(),
    new PostcodeAction()
];

let router=new Router(actions);

router.start();

repl.start({prompt: '> ', eval: handleInput});

function handleInput(cmd, context, filename, callback) {
    router.handle(cmd.trim());
    router.start();
    callback();
}









