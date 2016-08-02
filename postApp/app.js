/**
 * Created by wangqi on 16-8-1.
 */
'use strict';
const repl = require('repl');
const Router = require('./router/Router');
const Shell=require('./shell/Shell');
const InitAction = require('./actions/InitAction');
const BarcodeAction = require('./actions/BarcodeAction');
const ZipcodeAction = require('./actions/ZipcodeAction');
let actions = [
    new InitAction(),
    new BarcodeAction(),
    new ZipcodeAction()
];
const router = new Router(actions);
const shell = new Shell(router, repl);
shell.start();
