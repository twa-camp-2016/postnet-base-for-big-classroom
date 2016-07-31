/**
 * Created by zhangsha on 16-7-29.
 */
const changePostcode = require('../../transformer/action/topostcode');
const changeBarcode = require('../../transformer/action/tobarcode');
const selectCallBack1 = require('../../transformer/action/toPostCodeSelect');
const selectCallBack2 = require('../../transformer/action/toBarcodeSelect');

describe('topostcode', function () {
    it('print and return', function () {
        let cmd = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        spyOn(console, 'log');
        let result = changePostcode.doAction(cmd);
        expect(console.log).toHaveBeenCalledWith('45056-1234\ncd is 0');
        expect(result).toEqual('条码转邮编');

    });
});

describe('tobarcode', function () {
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
        expect(console.log).toHaveBeenCalledWith('error');
        expect(result).toEqual('邮编转条码');

    });
});

describe('toPostCodeSelect', function () {
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
});

describe('toBarCodeSelect', function () {
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
});