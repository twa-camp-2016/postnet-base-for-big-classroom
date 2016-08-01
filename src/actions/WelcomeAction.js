"use strict";


class WelcomeAction {
  constructor() {
    this.name = "welcome";
    this.help = "欢迎光临~";
  }

  doAction() {
    return "init";
  }
}
module.exports = WelcomeAction;