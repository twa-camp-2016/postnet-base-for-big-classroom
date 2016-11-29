/**
 * Created by wt on 16-7-31.
 */
/* global require,repl*/
const repl = require('repl');
const Router = require('./Actions/Action.js');
const  help=require('./Actions/help.js');
let route = new Router('init');
help(input=>console.log(input));
repl.start({prompt: ' ->', eval: handleInput});
function handleInput(cmd, context, filename, callback) {
    route.handle(cmd.trim(),function (text) {
        callback(null,text);
    });
    //callback();
}


