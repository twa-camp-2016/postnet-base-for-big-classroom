'use strict'
const doAction1=require('../../../transformer/action/initAction');
const barToZip1=require('../../../transformer/action/barToZip');
const input_bar1=require('../../../transformer/action/inputBar');
const input_zip1=require('../../../transformer/action/inputZip');
const zToBAction1=require('../../../transformer/action/zipToBar');
describe('doAction1',function () {
    let doAction=new doAction1();
    it('首页测试',function () {
        let result=doAction;
        expect(result.doAction('1')).toEqual(
            'zipCodeToBar'
        );
    });
    
    it('首页测试',function () {
        let result=doAction;
        expect(result.doAction('2')).toEqual(
            'barcodeToZip'
        );
    });
    
    it('首页测试',function () {
        spyOn(console,"log");
        spyOn(process,"exit");
        doAction.doAction('q');
        expect(process.exit).toHaveBeenCalled();
    });
    
    it('首页测试',function () {
        let result=doAction;
        spyOn(console,"log");
        expect(result.doAction('21222')).toEqual(
            'init'
        );
    });
})
describe('barToZip',function () {
    let barToZip=new barToZip1();
    it('barcode to zip code', function () {
        let result = barToZip;
        expect(result.doAction('1')).toEqual(
            'input_barcode'
        );
    });
    it('barcode to zip code', function () {
        let result = barToZip;
        expect(result.doAction('2')).toEqual(
            'init'
        );
    });
    it('barcode to zip code', function () {
        spyOn(console, "log");
        spyOn(process, "exit");
        barToZip.doAction('q');
        expect(process.exit).toHaveBeenCalled();

    });
    it('barcode to zip code', function () {
        spyOn(console, "log");
        let result = barToZip;

        expect(result.doAction('1111111')).toEqual(
            'barcodeToZip'
        );
    });

});
describe('input_bar',function () {
    let input_bar=new input_bar1();
    it('接收barcode并计算', function () {
        let result = input_bar;
        expect(result.doAction('1')).toEqual(
            'barcodeToZip'
        );
    });
    it('接收barcode并计算', function () {
        let result = input_bar;
        expect(result.doAction('2')).toEqual(
            'init'
        );
    });
    it('接收barcode并计算', function () {
        spyOn(console, "log");
        spyOn(process, "exit");
        input_bar.doAction('q');
        expect(process.exit).toHaveBeenCalled();

    });
    it('接收barcode并计算', function () {
        spyOn(console, "log");

        let result = input_bar;

        expect(result.doAction('1111111')).toEqual(
            'input_barcode'
        );
    });

});
describe('input_zip',function () {
    let input_zip=new input_zip1();
    it('接收zip code并计算', function () {
        let result = input_zip;
        expect(result.doAction('1')).toEqual(
            'zipCodeToBar'
        );
    });
    it('接收zip code并计算', function () {
        let result = input_zip;
        expect(result.doAction('2')).toEqual(
            'init'
        );
    });
    it('接收zip code并计算', function () {
        spyOn(console, "log");
        spyOn(process, "exit");
        input_zip.doAction('q');
        expect(process.exit).toHaveBeenCalled();

    });
    it('接收zip code并计算', function () {
        spyOn(console, "log");

        let result = input_zip;

        expect(result.doAction('1111111')).toEqual(
            'input_zipcode'
        );
    });

});
describe('zToBAction',function () {
    let zToBAction=new zToBAction1();
    it('zip code to barcode',function () {
        let result=zToBAction;
        expect(result.doAction('1')).toEqual('input_zipcode')
    });

    it('zip code to barcode',function () {
        let result=zToBAction;
        expect(result.doAction('2')).toEqual('init')
    });

    it('zip code to barcode',function () {
        spyOn(console, "log");
        spyOn(process, "exit");
        zToBAction.doAction('q');
        expect(process.exit).toHaveBeenCalled();

    });

    it('zip code to barcode',function () {
        spyOn(console, "log");

        let result = zToBAction;

        expect(result.doAction('1111111')).toEqual(
            'zipCodeToBar'
        );
    });
})
