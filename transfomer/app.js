/**
 * Created by ritter on 16-7-28.
 */
'use strict';

const repl = require('repl');

const InitAction = require('./actions/InitAction')
const PostAction = require('./actions/PostAction')
const BarcodeAction = require('./actions/BarcodeAction')

const Router = require('./router/Router')

const actions = [
    new InitAction(),
    new PostAction(),
    new BarcodeAction()
];

let router = new Router(actions);
router.start();
let replServer = repl.start({prompt: "> ", eval: handleCmd});

function handleCmd(cmd, context, filename, callback) {
    router.handle(cmd.trim());
    router.start();
    callback();
}