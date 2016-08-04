/**
 * Created by wangqi on 16-8-1.
 */
'use strict';
const InitAction = require("../actions/InitAction");
const BarcodeAction = require("../actions/BarcodeAction");
const ZipcodeAction = require("../actions/ZipcodeAction");
let ways = [
    new InitAction(),
    new BarcodeAction(),
    new ZipcodeAction()
];
class Router {
    constructor(initialState) {
        this.currentState = {value:initialState};
        this.actions = ways;
    }
    handle(cmd,exitAndPrint) {
         this.actions.find(v => v.name === this.currentState.value).doAction(cmd,exitAndPrint,this.currentState);
    }
}

module.exports = Router;