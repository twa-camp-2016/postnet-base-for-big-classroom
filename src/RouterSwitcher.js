/**
 * Created by zhangpei on 16/7/29.
 */

class RouterSwitcher {
  constructor(routers) {
    this.currentStatus = "welcome";
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
    if (this.currentStatus === "welcome") {
      this.currentStatus = "init";
      return this.routers.find(item => item.name === this.currentStatus).help;
    }
    return;
  }
}

module.exports = RouterSwitcher;
