/**
 * Created by hxc on 16-8-1.
 */


class Router {
    constructor(actions) {
        this.currentAction = 'init';
        this.actions = actions;
    }

    switchRouter(context, done) {
        let router = this.actions.find(item => item.name === this.currentAction);
        let result = router.doAction(context.cmd);
        let newRouter = this.actions.find(item => item.name === result);
        this.currentAction = newRouter.name;
       // setTimeout(function(){
            console.log(newRouter.help);
        //},100);

        done(null);
    }

    handleCmd(cmd, done) {
        this.switchRouter({
            cmd: cmd.trim()
        }, done);
        done(null);
    }
}
module.exports = Router;