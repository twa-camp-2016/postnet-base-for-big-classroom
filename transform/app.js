'use strict';

const repl = require('repl');
const init = require('./action/InitAction.js');
const barcode = require('./action/BarcodeAction.js');
const post = require('./action/PostAction.js');
const inputBar = require('./action/InputBarcode.js');
const inputPo = require('./action/InputPost.js');
const router = require('./action/Router.js');
const shell = require('./action/Shell.js');


const actions = [init, barcode, post, inputBar, inputPo];
const routers = new router(actions);
const shellAction = new shell(routers, repl);
shellAction.start();
