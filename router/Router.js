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
    constructor() {
        this.currentActionName = 'init';
        this.allActions = actions;
    }

    handle(cmd, outputAndExit) {
        this.currentActionName = this.allActions.find(v=>v.name === this.currentActionName).doAction(cmd, outputAndExit);
    }

    start() {
        console.log(this.allActions.find(v=>v.name === this.currentActionName).help);
    }
}


module.exports = Router;