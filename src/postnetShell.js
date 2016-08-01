/**
 * Created by zhangpei on 16/7/28.
 */
"use strict";
import WelcomeAction from './actions/WelcomeAction';
import InitAction from './actions/InitAction';
import PostcodeAction from './actions/PostcodeAction';
import BarcodeAction from './actions/BarcodeAction';
let RouterSwitcher = require("./RouterSwitcher");

let routers = [
  new WelcomeAction(),
  new InitAction(),
  new PostcodeAction(),
  new BarcodeAction()
];
let routerSwitcher = new RouterSwitcher(routers);

function run(cmd, output) {
  output(routerSwitcher.start());
  output(routerSwitcher.switchRouter(cmd.trim()).help);
}

module.exports = (emitter) => {
  emitter.on('userInput', run);
};
