/**
 * Created by afaren on 7/31/16.
 */
'use strict'

const repl = require('repl');
const Router = require('./Router');
const Shell = require('./shell/Shell');
const InitAction = require('./actions/InitAction');
const BarcodeAction = require('./actions/BarcodeAction');
const ZipcodeAction = require('./actions/ZipcodeAction');


let actions = [];
actions.push(new InitAction());
actions.push(new BarcodeAction());
actions.push(new ZipcodeAction());


const router = new Router(actions);
const shell = new Shell(router, repl);
shell.run();
