/**
 * Created by hxc on 16-7-29.
 */
'use strict';
const post = require('./core/PostcodeTransformer');
const barcode = require('./core/BarcodeTransformer');
const repl = require('repl');
const initDoAction = require('./Actions/InitDoAction');
const post2bar = require('./Actions/Post2barAction');
const bar2post = require('./Actions/Bar2postAction');
const Router = require('./Router/Router');

const actions = [initDoAction, post2bar, bar2post];
let router = new Router(actions);
let currentAction = 'init';
console.log(actions.find(item => item.name === currentAction).help);

var replServer = repl.start({
    prompt: "> ", eval: function (cmd, context, filename, done) {
        router.handleCmd(cmd, done);
    }
});

