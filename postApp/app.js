/**
 * Created by wangqi on 16-8-1.
 */
'use strict';
const repl = require('repl');
const Router = require('./router/Router');
let help = require("./actions/help");

const router = new Router('init');
help(outWord => console.log(outWord));
    repl.start({
        prompt: '->',
        eval: (cmd, context, filename, callback) => {
            router.handle(cmd.trim(),function(text) {
                callback(null, text);
            })
        }
    });


