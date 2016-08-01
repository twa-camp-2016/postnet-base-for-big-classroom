/**
 * Created by zhangpei on 16/7/29.
 */

class RouterSwitcher {
  constructor(routers) {
    this.currentStatus = "init";
    this.routers = routers;
  }

  switchRouter(cmd) {
    let router = this.routers.find(item =>item.name === this.currentStatus);
    let result = router.doAction(cmd);
    let newStatus = this.routers.find(item => item.name === result);
    this.currentStatus = newStatus.name;
    return newStatus;
  }

  start() {
    console.log("欢迎光临!");
    return this.routers.find(item =>item.name === this.currentStatus).help;
  }
}

module.exports = RouterSwitcher;
