/**
 * Created by wanggenwang on 16-7-29.
 */
'use strict';

class Router {
    constructor(actions){
        this.currentAction='init';
        this.action=actions;
    }
    handle(cmd) {
        let router = this.action.find(c => c.name === this.currentAction);
        this.currentAction = router.doAction(cmd);
    }
    start() {
        console.log(this.action.find(v => v.name === this.currentAction).help);
    }
}


module.exports = Router;


