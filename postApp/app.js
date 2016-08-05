/**
 * Created by zhangyiru on 16-8-1.
 */
'use strict';
const repl = require('repl');
const Router = require('./router/router');
let help = require("./help")
help(input=>console.log(input));
let router = new Router('init');
repl.start({
    prompt: '=>', eval: (cmd, context, filename, callback) => {
        router.handle(cmd.trim(), function (text) {
            callback(null, text)
        });
    }
});