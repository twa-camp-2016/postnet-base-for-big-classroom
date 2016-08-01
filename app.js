'use strict';

const repl = require('repl');

const InitAction = require('./transformer/actions/initAction');
const InputBarcodeAction = require('./transformer/actions/inputBarcodeAction');
const InputPostcodeAction = require('./transformer/actions/inputPostcodeAction');
const BarcodeAction = require('./transformer/actions/toBarcodeAction');
const PostcodeAction = require('./transformer/actions/toPostcodeAction');

const actions = [
  new InitAction(),
  new InputBarcodeAction(),
  new InputPostcodeAction(),
  new BarcodeAction(),
  new PostcodeAction()
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