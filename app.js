'use strict';
const repl = require('repl');
const Router = require('./router/Router');
const Shell=require('./shell/Shell');
const InitAction = require('./actions/InitAction');
const BarcodeAction = require('./actions/BarcodeAction');
const PostcodeAction = require('./actions/PostcodeAction');
let actions = [
    new InitAction(),
    new BarcodeAction(),
    new PostcodeAction()
];
const router = new Router(actions);
const shell = new Shell(router, repl);
shell.start();