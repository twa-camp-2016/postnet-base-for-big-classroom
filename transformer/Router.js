/**
 * Created by qiyanzi on 16-8-1.
 */
'use strict';
class Router {
    constructor(actions) {
        this.currentState = 'init';
        this.actions = actions;
    }

    handle(cmd) {
        let action = this.actions.find(v => v.name === this.currentState);
        let nextState = action.doAction(cmd);
        let newAction = this.actions.find(v => v.name === nextState);
        this.currentState = newAction.name;
    }

    start() {
        console.log(this.actions.find(v => v.name === this.currentState).help);
    }
}

module.exports = Router;