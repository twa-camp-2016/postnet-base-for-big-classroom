/**
 * Created by lucky on 16-7-29.
 */
'use strict';
/*global module ,process*/

const BarcodesAction = require('../actions/BarcodesAction');
const InitAction = require('../actions/InitAction');
const ZipCodesAction = require('../actions/ZipCodesAction');

let actions = [
    new BarcodesAction(),
    new InitAction(),
    new ZipCodesAction()
];

class Router {
    constructor(status) {
        this.currentActionName = {value: status};
        this.allActions = actions;
    }
    handle(cmd, outputAndExit) {
        this.allActions.find(v=>v.name === this.currentActionName.value).doAction(cmd, outputAndExit, this.currentActionName);
    }
}


module.exports = Router;