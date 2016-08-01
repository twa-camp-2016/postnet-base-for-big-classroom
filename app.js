/**
 * Created by wt on 16-7-31.
 */
/* global require,repl*/
const repl = require('repl');
const router = require('./Actions/Action.js');
route = new router();
route.start();
repl.start({prompt: ' >  ', eval: handleInput});
function handleInput(cmd, context, filename, callback) {
    route.handle(cmd.trim());
    route.start();
    callback();
}


