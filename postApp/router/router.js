/**
 * Created by zhangyiru on 16-8-1.
 */
'use strict';
const InitAction = require('../actions/initAction');
const ToBarCodeAction = require('../actions/toBarAction');
const ToPostCodeAction = require('../actions/toPostAction');
let actions = [
    new InitAction(),
    new ToBarCodeAction(),
    new ToPostCodeAction()
];

class Router {
    constructor(status) {
        this.currentActionName = {value: status};
        this.action = actions;
    }

    handle(cmd, outputAndExit) {
        this.action.find(v => v.name === this.currentActionName.value).doAction(cmd, outputAndExit, this.currentActionName)
        //actions.find(v => v.name === currentActionName).doAction(cmd);
    }
}

module.exports = Router;
