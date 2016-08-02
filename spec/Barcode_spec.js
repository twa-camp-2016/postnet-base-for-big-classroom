'use strict';
let Barcode = require('../core/Barcode');

describe("transform", ()=> {
    let barcode;
    beforeEach(()=> {
        barcode = new Barcode();
    });

    it("should charge this barcode is or not is legal", ()=> {
        let result = barcode.transform("| |:|*: :|:|: |:::| :::|| ::||: :|:|: |");
        expect(result).toEqual(undefined);
    });
    it("should transform to postcode", ()=> {
        let result = barcode.transform("| |:|:: :|:|: |:::| :::|| ::||: :|:|: |");
        expect(result).toEqual(957135);
    });
});
