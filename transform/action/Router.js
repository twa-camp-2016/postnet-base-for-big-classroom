/**
 * Created by liuru on 16-8-1.
 */
class SwitchRouter {
    constructor(actions) {
        this.currentAction = 'init';
        this.actions = actions;
    }

    handle(cmd) {
        let action = this.actions.find(item => item.name ===this.currentAction);
        let result = action.doAction(cmd);
        let newRouter = this.actions.find(item => item.name === result);
        this.currentAction = newRouter.name;
    }
    start(){
        console.log(this.actions.find(item => item.name === this.currentAction).help);
    }
}

module.exports = SwitchRouter;