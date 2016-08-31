/**
 * Created by zhangyiru on 16-8-1.
 */
'use strict';
let toPostAction = require('../../postApp/actions/toPostAction');
describe("InitAction", function () {
    fit("should enter postcodeToBarcode", function () {
        let ToPostAction = new toPostAction();
        let output = jasmine.createSpy('spy');
        spyOn(process, 'exit');
        let currentName = {value: 'barcode'};
        ToPostAction.doAction('1', output, currentName);
        expect(process.exit).toHaveBeenCalled();
        expect(output).toHaveBeenCalledWith('Goodbye');
    });
    fit("should enter postcodeToBarcode", function () {
        let ToPostAction = new toPostAction();
        let output = jasmine.createSpy('spy');
        let currentName = {value: 'barcode'};
        ToPostAction.doAction('2', output, currentName);
        expect(output).toHaveBeenCalledWith('1.邮编转条形码 2.条形码转邮编 3.退出');
    });
    it("should enter postcodeToBarcode", function () {
        let router = new Router('barcode');
        let actualOutput;
        let callback = (text)=>actualOutput = text;
        router.handle('12', callback);
        expect(actualOutput).toEqual('1.邮编转条形码 2.条形码转邮编 3.退出');
    })
});
