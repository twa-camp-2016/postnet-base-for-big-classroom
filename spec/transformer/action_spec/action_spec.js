'use strict'
const doAction=require('../../../transformer/action/initAction');
const barToZip=require('../../../transformer/action/barToZip');
const input_bar=require('../../../transformer/action/inputBar');
const input_zip=require('../../../transformer/action/inputZip');
const zToBAction=require('../../../transformer/action/zipToBar');
describe('doAction',function () {
    it('首页测试',function () {
        let result=doAction();
        expect(result.doAction('1')).toEqual(
            'zipcode->b'
        );
    });
    
    it('首页测试',function () {
        let result=doAction();
        expect(result.doAction('2')).toEqual(
            'barcode->z'
        );
    });
    
    it('首页测试',function () {
        spyOn(console,"log");
        spyOn(process,"exit");
        doAction().doAction('q');
        expect(process.exit).toHaveBeenCalled();
    });
    
    it('首页测试',function () {
        let result=doAction();
        spyOn(console,"log");
        expect(result.doAction('21222')).toEqual(
            'init'
        );
    });
})
describe('barToZip',function () {
    it('barcode to zip code', function () {
        let result = barToZip();
        expect(result.doAction('1')).toEqual(
            'input_barcode'
        );
    });
    it('barcode to zip code', function () {
        let result = barToZip();
        expect(result.doAction('2')).toEqual(
            'init'
        );
    });
    it('barcode to zip code', function () {
        spyOn(console, "log");
        spyOn(process, "exit");
        barToZip().doAction('q');
        expect(process.exit).toHaveBeenCalled();

    });
    it('barcode to zip code', function () {
        spyOn(console, "log");
        let result = barToZip();

        expect(result.doAction('1111111')).toEqual(
            'barcode->z'
        );
    });

});
describe('input_bar',function () {
    it('接收barcode并计算', function () {
        let result = input_bar();
        expect(result.doAction('1')).toEqual(
            'barcode->z'
        );
    });
    it('接收barcode并计算', function () {
        let result = input_bar();
        expect(result.doAction('2')).toEqual(
            'init'
        );
    });
    it('接收barcode并计算', function () {
        spyOn(console, "log");
        spyOn(process, "exit");
        input_bar().doAction('q');
        expect(process.exit).toHaveBeenCalled();

    });
    it('接收barcode并计算', function () {
        spyOn(console, "log");

        let result = input_bar();

        expect(result.doAction('1111111')).toEqual(
            'input_barcode'
        );
    });

});
describe('input_zip',function () {
    it('接收zip code并计算', function () {
        let result = input_zip();
        expect(result.doAction('1')).toEqual(
            'zipcode->b'
        );
    });
    it('接收zip code并计算', function () {
        let result = input_zip();
        expect(result.doAction('2')).toEqual(
            'init'
        );
    });
    it('接收zip code并计算', function () {
        spyOn(console, "log");
        spyOn(process, "exit");
        input_zip().doAction('q');
        expect(process.exit).toHaveBeenCalled();

    });
    it('接收zip code并计算', function () {
        spyOn(console, "log");

        let result = input_zip();

        expect(result.doAction('1111111')).toEqual(
            'input_zipcode'
        );
    });

});
describe('zToBAction',function () {
    it('zip code to barcode',function () {
        let result=zToBAction();
        expect(result.doAction('1')).toEqual('input_zipcode')
    });

    it('zip code to barcode',function () {
        let result=zToBAction();
        expect(result.doAction('2')).toEqual('init')
    });

    it('zip code to barcode',function () {
        spyOn(console, "log");
        spyOn(process, "exit");
        zToBAction().doAction('q');
        expect(process.exit).toHaveBeenCalled();

    });

    it('zip code to barcode',function () {
        spyOn(console, "log");

        let result = zToBAction();

        expect(result.doAction('1111111')).toEqual(
            'zipcode->b'
        );
    });
})
