/**
 * Created by zhangsha on 16-7-29.
 */
const changePostcode = require('../../transformer/action/TransformPostCodeAction');
const changeBarcode = require('../../transformer/action/TransformBarcodeAction');
const selectCallBack1 = require('../../transformer/action/TransformPostCodeSelectAction');
const selectCallBack2 = require('../../transformer/action/TransformBarcodeSelectAction');
const initAction = require('../../transformer/action/InitAction');

describe('TransformPostcodeAction', function () {
    it('print and return', function () {
        let cmd = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        spyOn(console, 'log');
        let result = changePostcode.doAction(cmd);
        expect(console.log).toHaveBeenCalledWith('45056-1234\ncd is 0');
        expect(result).toEqual('条码转邮编');

    });

    it('print and return', function () {
        let cmd = "| :|&*|";
        spyOn(console, 'log');
        let result = changePostcode.doAction(cmd);
        expect(console.log).toHaveBeenCalledWith(`error: 输入的条码不能有：和|以外的字符`);
        expect(result).toEqual('条码转邮编');
    });
});

describe('TransformBarcodeAction', function () {
    it('print and return', function () {
        let cmd = '45056-1234';
        spyOn(console, 'log');
        let result = changeBarcode.doAction(cmd);
        expect(console.log).toHaveBeenCalledWith('|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|\ncd is 0');
        expect(result).toEqual('邮编转条码');

    });

    it('print and return', function () {
        let cmd = '4505';
        spyOn(console, 'log');
        let result = changeBarcode.doAction(cmd);
        expect(console.log).toHaveBeenCalledWith(`error: 输入的邮编位数必须是5或9`);
        expect(result).toEqual('邮编转条码');

    });
});

describe('TransformPostCodeSelectView', function () {
    it('print select view', function () {
        let cmd = '1';
        let result = selectCallBack1.doAction(cmd);
        let expected = '输入条码';
        expect(result).toEqual(expected);
    });
    it('print select view', function () {
        let cmd = '2';
        let result = selectCallBack1.doAction(cmd);
        let expected = 'init';
        expect(result).toEqual(expected);
    });
    it('print select view', function () {
        spyOn(process, 'exit')
        let cmd = 'q';
        selectCallBack1.doAction(cmd);

        expect(process.exit).toHaveBeenCalledWith(0);
    });
});

describe('TransformBarcodeSelectView', function () {
    it('print select view', function () {
        let cmd = '1';
        let result = selectCallBack2.doAction(cmd);
        let expected = '输入邮编';
        expect(result).toEqual(expected);
    });
    it('print select view', function () {
        let cmd = '2';
        let result = selectCallBack2.doAction(cmd);
        let expected = 'init';
        expect(result).toEqual(expected);
    });
    it('print select view', function () {
        spyOn(process, 'exit')
        let cmd = 'q';
        selectCallBack1.doAction(cmd);

        expect(process.exit).toHaveBeenCalledWith(0);
    });
});
describe('init', function () {
    it('print select view', function () {
        let cmd = '1';
        let result = initAction.doAction(cmd);
        let expected = '条码转邮编';
        expect(result).toEqual(expected);
    });
    it('print select view', function () {
        let cmd = '2';
        let result = initAction.doAction(cmd);
        let expected = '邮编转条码';
        expect(result).toEqual(expected);
    });
    it('print select view', function () {
        spyOn(process, 'exit')
        let cmd = 'q';
        initAction.doAction(cmd);

        expect(process.exit).toHaveBeenCalledWith(0);
    });
});


