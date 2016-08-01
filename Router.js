"use strict";

class Router {
    constructor(actions) {
        this.actions = actions;
        this.currentActionName = "init";
    }

    handle(cmd) {
        let next = this.actions.find(v => v.name === this.currentActionName).doAction(cmd);
        this.currentActionName = next;
    }

    start() {
        console.log(this.actions.find(v => v.name === this.currentActionName).help);
    }

}

module.exports = Router;