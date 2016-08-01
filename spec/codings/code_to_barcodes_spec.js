/*global require,describe*/
const postToBarcode=require('../../codings/code_to_barcodes.js');

describe("postToBarcode",function () {
    let postcode;

    beforeEach(()=> {
        postcode = new postToBarcode();
    });

    it("it should return Your input invalid! ",function () {
        let inputs='1024=1';
        let expected={
            error:'Your input invalid!',
            data:undefined
        };
        let result=postcode.codingBarcodes(inputs);
        expect(result).toEqual(expected);
    });

   it("it should return Length wrong!",function () {
        let inputs='489';
        let expected={
            error:'Length wrong!',
            data:undefined
        };
        let result=postcode.codingBarcodes(inputs);
        expect(result).toEqual(expected);
    });

  it('it should print right barcodes',function () {
        let inputs='10241';
        let expected={
            error:undefined,
            data:'| :::||||:::::|:|:|::|:::||::|:| |'
        };
        let result=postcode.codingBarcodes(inputs);
        expect(result).toEqual(expected);
    });
});
