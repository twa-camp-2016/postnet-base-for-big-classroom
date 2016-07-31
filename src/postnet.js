/**
 * Created by zhangpei on 16/7/28.
 */
'use strict';

const repl = require('repl');
const EventEmitter = require('events');
import emitterOn from "./postnetShell";


class PostAppEmitter extends EventEmitter {
}

const emitter = new PostAppEmitter();
emitterOn(emitter);
let replServer = repl.start({prompt: '> ', eval: myEval});
function myEval(cmd, context, filename, callback) {
  function outputFunc(output) {
    callback(output);
  }


  emitter.emit('userInput', cmd, outputFunc);
}