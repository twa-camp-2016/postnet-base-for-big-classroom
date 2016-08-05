/**
 * Created by zhangyiru on 16-8-1.
 */
let initAction = require('../../postApp/actions/initAction');

describe("InitAction",function(){
    fit("should enter postcodeToBarcode",function(){
        let init = new initAction();
        let output = jasmine.createSpy('spy');
        let currentName = {value:'init'}
        init.doAction('1',output,currentName);
        expect(output).toHaveBeenCalledWith('1.退出  2.返回上一层   请输入邮编：');
    });
    fit("should enter postcodeToBarcode",function(){
        let init = new initAction();
        let output = jasmine.createSpy('spy');
        let currentName = {value:'init'}
        init.doAction('2',output,currentName);
        expect(output).toHaveBeenCalledWith('1.退出  2.返回上一层  请输入条形码：');
    })
    fit("should enter postcodeToBarcode",function(){
        let init = new initAction();
        let output = jasmine.createSpy('spy');
        let currentName = {value:'postcode'}
        spyOn(process,'exit')
        init.doAction('3',output,currentName);
        expect(output).toHaveBeenCalledWith('bye');
        expect(process.exit).toHaveBeenCalled();
    })
    fit("should enter postcodeToBarcode",function(){
        let init = new initAction();
        let output = jasmine.createSpy('spy');
        let currentName = {value:'barcode'};
        init.doAction('12',output,currentName);
        expect(output).toHaveBeenCalledWith('error');
    })
});







