'use strict';
const PostcodeAction = require('../actions/PostcodeAction');
describe("postcode", ()=> {
    let postcode;
    beforeEach(()=>{
        postcode = new PostcodeAction();
    });

    it("should return barcode", ()=> {
        let cmd = "45056-1234";
        spyOn(console,"log");
        let result = postcode.doAction(cmd);
        expect(console.log).toHaveBeenCalledWith('I\'m converting the postcode: ' + cmd + "\n" +
            'This is the correct barcode: ' + "|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|");
    });
    it("should return init", ()=> {
        let cmd = 'q';
        let result = postcode.doAction(cmd);
        expect(result).toEqual('init');
    });
    it("should return error", ()=> {
        let cmd = "12345a";
        spyOn(console,"log");
        let result = postcode.doAction(cmd);
        expect(console.log).toHaveBeenCalledWith("This postcode is error!")
    });
});