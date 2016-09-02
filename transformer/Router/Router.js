/**
 * Created by tong on 16-8-1.
 */
'use strict';

class Router {
  constructor(actions) {
    this.currentName = 'init';
    this.actions = actions;
  }

  switchRouter(cmd) {
    let router = this.actions.find(item => item.name === this.currentName);
    let result = router.doAction(cmd);
    let newRouter = this.actions.find(item => item.name === result);
    this.currentName = newRouter.name;
  }

  start() {
    console.log(this.actions.find(item => item.name === this.currentName).help);
  }
}

module.exports = Router;