/**
 * Created by zhangpei on 16/7/29.
 */

import WelcomeAction from "../../src/actions/WelcomeAction";

describe("WelcomeDoAction", function () {
  let action;
  beforeEach(() => {
    spyOn(console, "log");
    action = new WelcomeAction();
  });
  it("should return status", function () {
    let cmd = "1";
    let result = action.doAction();
    let expectResult = "init";
    expect(result).toEqual(expectResult);
  })
});