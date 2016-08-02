'use strict';
class Router {
    constructor(actions) {
        this.currentActionName = 'init';
        this.actions = actions;
    }

    handle(cmd) {
        let action = this.actions.find(v => v.name === this.currentActionName);
        let nextActionName = action.doAction(cmd);
        this.currentActionName = nextActionName;
    }

    start() {
        console.log((this.actions.find(v => v.name === this.currentActionName)).help);
    }
}

module.exports = Router;