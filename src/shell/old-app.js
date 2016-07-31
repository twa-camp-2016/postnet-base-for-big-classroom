'use strict';
const Router = require('./../Router');
const repl = require('repl');

const router = new Router();

router.start();
repl.start({prompt: '->', eval: handleCmd});

function handleCmd(cmd, context, filename, callback) {
  router.handle(cmd.trim());
  router.start();
  callback();
}



