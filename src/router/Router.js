/**
 * Created by Sunshine on 2016/7/31.
 */
'use strict';

class Router {
    constructor(actions) {

        this.currentAction = 'init';
        this.actions = actions;
    }

    switchRouter(context) {

        let router = this.actions.find(item => item.name === this.currentAction);
        let result = router.doAction(context.cmd);
        let newRouter = this.actions.find(item => item.name === result);

        this.currentAction = newRouter.name;

    }

    start() {
        console.log(this.actions.find(item => item.name === this.currentAction).help);
    }
}
module.exports = Router;