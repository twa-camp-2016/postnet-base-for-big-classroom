'use strict';

const init = require("./action/init.js");
const postcode = require("./action/postcode.js");
const barcode = require("./action/barcode.js");
const exchangePostcode = require("./action/exchangePostcode.js");
const exchangeBarcode = require("./action/exchangeBarcode.js");
const Shell = require("./transformer/Shell");
const Router = require("./transformer/Router");
const repl = require('repl');

const actions = [
    new init(),
    new postcode(),
    new barcode(),
    new exchangePostcode(),
    new exchangeBarcode()];
const router = new Router(actions);
const shell = new Shell(router, repl);
shell.start();



















// function switchRouter(context, done) {
//     let router = actions.find(item => item.name === currentAction);
//     let result = router.doAction(context.cmd);
//     let newRouter = actions.find(item => item.name === result);
//     currentAction = newRouter.name;
//     console.log(newRouter.help);
//     done(null);
// }
//
// function handleCmd(cmd, context, filename, done) {
//     switchRouter({
//         cmd: cmd.trim()
//     }, done);
//     done(null);
// }
//
// var replServer = repl.start({prompt: "> ", eval: handleCmd});
// let currentAction = 'init';
// console.log(actions.find(item => item.name === currentAction).help);
