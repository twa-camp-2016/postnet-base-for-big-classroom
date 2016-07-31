/**
 * Created by Sunshine on 2016/8/1.
 */
const repl = require('repl');//

const InitAction = require('./shell/InitAction');
const BarcodeToPostcodeAction = require('./shell/BarcodeToPostcodeAction.js');
const PostcodeToBarcodeAction = require('./shell/PostcodeToBarcodeAction.js');
const DealBarcodeToPostcodeAction = require('./shell/DealBarcodeToPostcodeAction.js');
const DealPostcodeToBarcodeAction = require('./shell/DealPostcodeToBarcodeAction.js');
const Shell = require('./shell/Shell.js');
const Router = require('./router/Router.js');

let actions = [
    new InitAction(repl),
    new BarcodeToPostcodeAction(),
    new PostcodeToBarcodeAction(),
    new DealBarcodeToPostcodeAction(),
    new DealPostcodeToBarcodeAction()
];

let router = new Router(actions);
let shell = new Shell(router, repl);

shell.run();
