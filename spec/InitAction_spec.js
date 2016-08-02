'use strict';
const InitAction = require('../actions/InitAction');
describe("init", ()=> {
    let initAction;
    beforeEach(()=> {
        initAction = new InitAction();
    });

    it("should return postcode", ()=> {
        let cmd = "1";
        let result = initAction.doAction(cmd);
        expect(result).toEqual("postcode");
    });
    it("should return barcode", ()=> {
        let cmd = "2";
        let result = initAction.doAction(cmd);
        expect(result).toEqual("barcode");
    });
    it("should end", ()=> {
        spyOn(process,"exit");
        let cmd = "3";
        initAction.doAction(cmd);
        expect(process.exit).toHaveBeenCalled();
    });
    it("should return error", ()=> {
        let cmd = "5";
        let result = initAction.doAction(cmd);
        expect(result).toEqual("Input error!");
    });

});


