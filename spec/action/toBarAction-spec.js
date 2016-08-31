/**
 * Created by zhangyiru on 16-8-1.
 */
let toBarAction = require('../../postApp/actions/toBarAction');

describe("toBarAction", function () {
    fit("should enter postcodeToBarcode", function () {
        let ToBarAction = new toBarAction();
        let output = jasmine.createSpy('spy');
        let currentName = {value: 'postcode'};
        spyOn(process, 'exit');
        ToBarAction.doAction('1', output, currentName);
        expect(output).toHaveBeenCalledWith("Goodbye");
        expect(process.exit).toHaveBeenCalled;
    });
    fit("should enter postcodeToBarcode", function () {
        let ToBarAction = new toBarAction();
        let output = jasmine.createSpy('spy');
        let currentName = {value: 'postcode'};
        ToBarAction.doAction('2', output, currentName);
        expect(output).toHaveBeenCalledWith('1.邮编转条形码 2.条形码转邮编 3.退出');
    });
    it("should enter postcodeToBarcode", function () {
        let router = new Router('postcode');
        let actualOutput;
        let callback = (text)=>actualOutput = text;
        router.handle('12', callback);
        expect(actualOutput).toEqual('1.邮编转条形码 2.条形码转邮编 3.退出');
    })
});
