/**
 * Created by yuan on 7/29/16.
 */
/*global module,cmd,require,process*/
'use strict';
const BarcodeAction=require('./actions/BarcodeActions');
const InitAction=require('./actions/InitActions');
const PostAction=require('./actions/PostcodeActions');

let allActions = [
    new InitAction(),
    new BarcodeAction(),
    new PostAction()];

class Router {
    constructor(actions){
        this.currentState = 'init';
        this.actions = allActions;
    }
    handle(cmd) {
        this.currentState= this.actions.find(v => v.name === this.currentState).doAction(cmd);
    }
    start() {
        console.log(this.actions.find(v => v.name === this.currentState).help);
    }
}

module.exports = Router;


