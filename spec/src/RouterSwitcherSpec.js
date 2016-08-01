/**
 * Created by zhangpei on 16/7/29.
 */

import RouterSwitcher from "../../src/RouterSwitcher";
import WelcomeAction from '../../src/actions/WelcomeAction';
import InitAction from '../../src/actions/InitAction';
import PostcodeAction from '../../src/actions/PostcodeAction';
import BarcodeAction from '../../src/actions/BarcodeAction';


describe("switchRouter", function () {
  let routerSwitcher;
  let routers;
  beforeEach(()=> {
    routers = [
      new WelcomeAction(),
      new InitAction(),
      new PostcodeAction(),
      new BarcodeAction()
    ];
    routerSwitcher = new RouterSwitcher(routers);
  });

  it("should return a string", function () {
    let cmd = "1";
    let result = routerSwitcher.switchRouter(cmd);
    let expectResult = routerSwitcher.routers.find(item=> {
      return item.name === "init";
    });
    expect(result).toEqual(expectResult);
  });

});

describe("start", function () {
  let routerSwitcher;
  let routers;
  beforeEach(()=> {
    routers = [
      new WelcomeAction(),
      new InitAction(),
      new PostcodeAction(),
      new BarcodeAction()
    ];
    routerSwitcher = new RouterSwitcher(routers);
  });

  it("should return a string", function () {
    let cmd = "1";
    let result = routerSwitcher.start();
    let expectResult = "欢迎光临~";
    expect(result).toEqual(expectResult);
  });
});