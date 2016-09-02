'use strict';

const repl = require('repl');

const InitAction = require('./actions/InitAction');
const InputBarcodeAction = require('./actions/InputBarcodeAction');
const InputPostcodeAction = require('./actions/InputPostcodeAction');
const BarcodeAction = require('./actions/BarcodeAction');
const PostcodeAction = require('./actions/PostcodeAction');

const Router = require('./Router/Router');

const actions = [
  new InitAction(),
  new InputBarcodeAction(),
  new InputPostcodeAction(),
  new BarcodeAction(),
  new PostcodeAction()
]

let router = new Router(actions);
router.start();

var replServer = repl.start({prompt: "> ", eval: handleCmd});

function handleCmd(cmd, context, filename, callback) {
  router.switchRouter(cmd.trim());
  router.start();
  callback();
}