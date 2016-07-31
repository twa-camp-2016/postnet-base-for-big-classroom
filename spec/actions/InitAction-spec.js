/**
 * Created by afaren on 7/29/16.
 */
'use strict';
const InitAction = require('../../src/actions/InitAction');

describe('InitAction', () => {
  let initAction;
  beforeEach(()=> {
    initAction = new InitAction();
    spyOn(initAction, 'doAction').and.callThrough();
  });
  describe('doAction', () => {
    it(`should return 'barcode' when cmd is '1'`, () => {
      let cmd = '1';
      let expected = 'barcode';
      let actual = initAction.doAction(cmd);

      expect(initAction.doAction).toHaveBeenCalledWith(cmd);
      expect(actual).toEqual(expected);
    });

    it(`should return 'zipcode' when cmd is '2'`, () => {
      let cmd = '2';
      let expected = 'zipcode';
      let actual = initAction.doAction(cmd);

      expect(initAction.doAction).toHaveBeenCalledWith(cmd);
      expect(actual).toEqual(expected);
    });

    it(`should quit when cmd is 'q'`, () => {
      spyOn(console, 'log');
      spyOn(process, 'exit'); // 避免

      let cmd = 'q';
      let expectedExitedInfo = '---exit---';
      initAction.doAction(cmd);

      expect(process.exit).toHaveBeenCalled();
      expect(initAction.doAction).toHaveBeenCalledWith(cmd);
      expect(console.log).toHaveBeenCalledWith(expectedExitedInfo);// 这样写导致jasmine测试信息一闪而过，但是下面的测试不会导致这样的结果
    });

    it(`should return 'init' and print console log 'invalidate input'  when cmd is other`, () => {
      spyOn(console, 'log');
      let otherCmd = 'asdfghjklwertyuiopzxcvbnmm34567890'.split('');

      otherCmd.forEach((cmd)=> {
        expect(initAction.doAction(cmd)).toEqual('init');
        let expectedConsoleInfo = 'invalidate input';
        expect(console.log).toHaveBeenCalledWith(expectedConsoleInfo);
        expect(initAction.doAction).toHaveBeenCalledWith(cmd);
      });

    });

  });

});
