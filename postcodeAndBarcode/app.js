/**
 * Created by fcc on 16-7-29.
 */
'use strict';
const postNet1=require('../postcodeAndBarcode/barcodeTurnPostcode');
const postNet2=require('../postcodeAndBarcode/postcodeTurnBarcode');
const initPage = require("../action/initPage");
const barcodeTurnPostcodePage = require("../action/barcodeTurnPostcodePage");
const changePage = require("../action/postcodeTurnBarcodePage");
const postcodeTurnBarcodePage = require("../action/postcodeTurnBarcodePage");
const repl = require('repl');
function switchRouter(context, done) {
    let router = actions.find(item => item.name === currentAction);
    let result = router.doAction(context.cmd);
    let newRouter = actions.find(item => item.name === result);
    currentAction = newRouter.name;
    console.log(newRouter.help);
    done(null);
}

function handleCmd(cmd, context, filename, done) {
    switchRouter({
        cmd: cmd.trim()
    }, done);
    done(null);
}
var replServer = repl.start({prompt: "> ", eval: handleCmd});

let actions = [
    new initPage(),
    new changePage(),
    new barcodeTurnPostcodePage(),
    new postcodeTurnBarcodePage()
];

let currentAction = 'init';
console.log(actions.find(item => item.name === currentAction).help);