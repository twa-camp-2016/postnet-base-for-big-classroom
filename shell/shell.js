/**
 * Created by lucky on 16-7-29.
 */
'use strict';
/*global repl,require*/

const Router = require('../router/Router');
const repl = require('repl');

let router = new Router();
router.start();
repl.start({prompt: '-->', eval: handleInput});

//
// function handleInput(cmd, context, filename, callback) {
//     router.handle(cmd.trim());
//     router.start();
//     callback();
// }

function handleInput(cmd, context, filename, callback) {

    router.handle(cmd.trim(), function (text) {
        callback(null, text);
        router.start();
       // callback();
    });
    // router.start();
     callback();
}



