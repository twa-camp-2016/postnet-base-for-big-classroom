'use strict';
const Postcode = require("../core/Postcode");
describe("transform", ()=> {
    let postcode;
    beforeEach(()=> {
        postcode = new Postcode();
    });

    it("should charge this postcode is or not is legal", ()=> {

        let result = postcode.transform("12345a");
        expect(result).toEqual(undefined);
    });
    it("should transform to barcode", ()=> {
        let result = postcode.transform("45056-1234");
        expect(result).toEqual("|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|");
    });
});
