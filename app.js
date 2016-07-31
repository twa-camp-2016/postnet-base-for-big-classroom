'use strict';

const repl = require('repl');

const initAction = require('./transformer/actions/initAction');
const inputBarcodeAction = require('./transformer/actions/inputBarcodeAction');
const inputPostcodeAction = require('./transformer/actions/inputPostcodeAction');
const toBarcodeAction = require('./transformer/actions/toBarcodeAction');
const toPostcodeAction = require('./transformer/actions/toPostcodeAction');

const actions = [
  initAction,
  inputBarcodeAction,
  inputPostcodeAction,
  toBarcodeAction,
  toPostcodeAction
]

let currentAction = 'init';
console.log(actions.find(item => item.name === currentAction).help);

var replServer = repl.start({prompt: "> ", eval: handleCmd});

function switchRouter(context, done) {
  let router = actions.find(item => item.name === currentAction);
  let result = router.doAction(context.cmd);
  let newRouter = actions.find(item => item.name === result);
  currentAction = newRouter.name;
  console.log(newRouter.help);
  done(null);
}

function handleCmd(cmd, context, filename, done) {
  switchRouter({
    cmd: cmd.trim()
  }, done);
  done(null);
}