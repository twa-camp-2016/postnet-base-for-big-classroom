/**
 * Created by lucky on 16-7-29.
 */
'use strict';
/*global repl,require*/

const Router = require('../router/Router');
const repl = require('repl');
let help=require("../router/help");

let router = new Router('init');
help(input=>console.log(input));
repl.start({prompt: '-->', eval: handleInput});

function handleInput(cmd, context, filename, callback) {
    router.handle(cmd.trim(), function (text) {
        callback(null, text);
    });
}



