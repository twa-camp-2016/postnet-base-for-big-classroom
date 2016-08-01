'use strict';
const InitAction = require('./src/actions/InitAction');
const PostcodeAction = require('./src/actions/PostcodeAction');
const BarcodeAction = require('./src/actions/BarcodeAction');

let actions = [
    new InitAction(),
    new PostcodeAction(),
    new BarcodeAction(),
];

class Router {
    constructor(currentActionName) {
        this.currentActionName = currentActionName;
    }

    handle(cmd) {
        let nextActionName = actions.find((item)=>item.name === this.currentActionName).doAction(cmd);
        this.currentActionName = nextActionName;

    }

    start() {
        console.log(actions.find((item)=>item.name === this.currentActionName).help);
    }
}
module.exports = Router;