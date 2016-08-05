/**
 * Created by shiyue on 16-8-1.
 */
'use strict';
const InitAction = require('../../src/actions/InitAction');

describe('initAction', function () {
    let initAction;
    beforeEach(()=>
        initAction = new InitAction()
    );

    it('init->postcode', function () {
        let cmp = '1';
        let expected = 'postcode';
        expect(initAction.doAction(cmp)).toEqual(expected);
    });

    it('init->barcode', function () {
        let cmp = '2';
        let expected = 'barcode';
        expect(initAction.doAction(cmp)).toEqual(expected);
    });

    it('init->exit', function () {
        spyOn(process, "exit");
        let cmp = 'q';
        initAction.doAction(cmp)
        expect(process.exit).toHaveBeenCalled();
    });

    it('输入无效！', function () {
        spyOn(console, "log");
        let cmp = 'a';
        let result = '无效的输入！请重新选择-V_V-';
        let action = initAction.doAction(cmp);
        expect(action).toEqual('init');
        expect(console.log).toHaveBeenCalledWith(result);
    });
});
