'use strict';
var sec = require("../src/pos.js");

describe("printBarcode test", function () {
    it("printBarcode test", function () {
        let postCode = '95713';
        let result = sec.printBarcode(postCode);
        expect(result).toEqual('Validation Check: 95713 == ||:|:::|:|:|:::|:::||::||::|:|:|\n\ncd is 0');
    })
});

describe("printPostCode test", function () {
    it("printPostCode test", function () {
        let barCode = '| :::|| :::|| :::|| :::|| :::|| :::|| :::|| :::|| :::|| :::|| |';
        let result = sec.printPostCode(barCode);
        expect(result).toEqual('Example:    | :::|| :::|| :::|| :::|| :::|| :::|| :::|| :::|| :::|| :::|| |'
        +'\nBar Code    Frame   Digit-1 Digit-2 Digit-3 Digit-4 Digit-5 Digit-6 Digit-7 Digit-8 Digit-9 CD  Frame'
        +'\n11111-1111     Bar(1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  Bar');
    });

    it("printPostCode test", function () {
        let barCode = '| |:|:: :|:|: |:::| :::|| ::||: :|:|: |';
        let result = sec.printPostCode(barCode);
        expect(result).toEqual('Example:    | |:|:: :|:|: |:::| :::|| ::||: :|:|: |'
            + '\nBar Code    Frame   Digit-1 Digit-2 Digit-3 Digit-4 Digit-5 CD  Frame'
            + '\n95713     Bar(9) (5) (7) (1) (3) (5)  Bar');
    });
});

describe("secPostCode test", function () {
    it("secPostCode test", function () {
        let postCode = '957135333';
        let result = sec.secPostCode(postCode);
        expect(result).toEqual(true);
    });
    it("secPostCode test", function () {
        let postCode = '95713';
        let result = sec.secPostCode(postCode);
        expect(result).toEqual(true);
    });
    it("secPostCode test", function () {
        let postCode = '95713-1211';
        let result = sec.secPostCode(postCode);
        expect(result).toEqual(true);
    });

    it("secPostCode test", function () {
        let postCode = '95713ww';
        let result = sec.secPostCode(postCode);
        expect(result).toEqual(false);
    });
    it("secPostCode test", function () {
        let postCode = '957135';
        let result = sec.secPostCode(postCode);
        expect(result).toEqual(false);
    });

});

describe("formatPostCode test", function () {
    it("formatPostCode test", function () {
        let postCode = '95713';
        let result = sec.formatPostCode(postCode);
        expect(result).toEqual(['9', '5', '7', '1', '3']);
    })
});

describe("getSecCode test", function () {
    it("getSecCode test", function () {
        let formatPostcode = ['9', '5', '7', '1', '3'];
        let result = sec.getSecCode(formatPostcode);
        expect(result).toEqual(5);
    })
});

describe("getPostSecCode test", function () {
    it("getPostSecCode test", function () {
        let formatPostcode = ['9', '5', '7', '1', '3'];
        let secCode = 5;
        let result = sec.getPostSecCode(formatPostcode, secCode);
        expect(result).toEqual(['9', '5', '7', '1', '3', '5']);
    })
});

describe("matchPostcode test", function () {
    it("matchPostcode test", function () {
        let barcodes = [
            {item: '1', barcode: ':::||'}, {item: '2', barcode: '::|:|'},
            {item: '3', barcode: '::||:'}, {item: '4', barcode: ':|::|'},
            {item: '5', barcode: ':|:|:'}, {item: '6', barcode: ':||::'},
            {item: '7', barcode: '|:::|'}, {item: '8', barcode: '|::|:'},
            {item: '9', barcode: '|:|::'}, {item: '0', barcode: '||:::'}
        ];
        let postSecCode = ['9', '5', '7', '1', '3', '5'];
        let result = sec.matchPostcode(barcodes, postSecCode);
        expect(result).toEqual(['|:|::', ':|:|:', '|:::|', ':::||', '::||:', ':|:|:']);
    })
});

describe("getBarcodeStr test", function () {
    it("getBarcodeStr test", function () {
        let postCode = '95713';
        let postBarcodes = ['|:|::', ':|:|:', '|:::|', ':::||', '::||:', ':|:|:'];
        let result = sec.getBarcodeStr(postBarcodes, postCode);
        expect(result).toEqual('Validation Check: 95713 == ||:|:::|:|:|:::|:::||::||::|:|:|\n\ncd is 0');
    })
});

describe("secBarCode test", function () {
    it("secBarCode test", function () {
        let barCode = '| |:|:: :|:|: |:::| :::|| ::||: :|:|: |';
        let result = sec.secBarCode(barCode);
        expect(result).toEqual(true);
    });
    it("secBarCode test", function () {
        let barCode = '|*21 |:|:: :|:|: |:::| :::|| ::||: :|:|: |';
        let result = sec.secBarCode(barCode);
        expect(result).toEqual(false);
    });
    it("secBarCode test", function () {
        let barCode = '| ||||| :|:|: |:::| :::|| ::||: :|:|: |';
        let result = sec.secBarCode(barCode);
        expect(result).toEqual(false);
    });
    it("secBarCode test", function () {
        let barCode = '| |:|';
        let result = sec.secBarCode(barCode);
        expect(result).toEqual(false);
    });
    it("test !!",function(){
        let barCode ='| :::|| :::|| :::|| :::|| :::|| :::|| :::|| :::|| :::|| :::|| |';
        let result = sec.secBarCode(barCode);
        expect(result).toEqual(true);
    });
});

describe("formatBarCode test", function () {
    it("formatBarCode test", function () {
        let barCode = '| |:|:: :|:|: |:::| :::|| ::||: :|:|: |';
        let result = sec.formatBarCode(barCode);
        expect(result).toEqual(['|:|::', ':|:|:', '|:::|', ':::||', '::||:', ':|:|:']);
    })
});

describe("getPostCode test", function () {
    it("getPostCode test", function () {
        let barcodes = [
            {item: '1', barcode: ':::||'}, {item: '2', barcode: '::|:|'},
            {item: '3', barcode: '::||:'}, {item: '4', barcode: ':|::|'},
            {item: '5', barcode: ':|:|:'}, {item: '6', barcode: ':||::'},
            {item: '7', barcode: '|:::|'}, {item: '8', barcode: '|::|:'},
            {item: '9', barcode: '|:|::'}, {item: '0', barcode: '||:::'}
        ];
        let formatBarcode = ['|:|::', ':|:|:', '|:::|', ':::||', '::||:', ':|:|:'];
        let result = sec.getPostCode(barcodes, formatBarcode);
        expect(result).toEqual('957135');
    })
    it("getPostCode test", function () {
        let barcodes = [
            {item: '1', barcode: ':::||'}, {item: '2', barcode: '::|:|'},
            {item: '3', barcode: '::||:'}, {item: '4', barcode: ':|::|'},
            {item: '5', barcode: ':|:|:'}, {item: '6', barcode: ':||::'},
            {item: '7', barcode: '|:::|'}, {item: '8', barcode: '|::|:'},
            {item: '9', barcode: '|:|::'}, {item: '0', barcode: '||:::'}
        ];
        let formatBarcode = [':::||', ':::||', ':::||', ':::||', ':::||', ':::||',':::||',':::||',':::||',':::||'];
        let result = sec.getPostCode(barcodes, formatBarcode);
        expect(result).toEqual('1111111111');
    })
});
describe("checkSecCode test", function () {
    it("checkSecCode test", function () {
        let postCode = '957135';
        let result = sec.checkSecCode(postCode);
        expect(result).toEqual(true);
    });
    it("checkSecCode test", function () {
        let postCode = '957136';
        let result = sec.checkSecCode(postCode);
        expect(result).toEqual(false);
    });
});

describe("getPostStr test", function () {
    it("getPostStr test", function () {
        let barCode = '| |:|:: :|:|: |:::| :::|| ::||: :|:|: |';
        let postCode = '957135';
        let result = sec.getPostStr(postCode, barCode);
        expect(result).toEqual('Example:    | |:|:: :|:|: |:::| :::|| ::||: :|:|: |'
            + '\nBar Code    Frame   Digit-1 Digit-2 Digit-3 Digit-4 Digit-5 CD  Frame'
            + '\n95713     Bar(9) (5) (7) (1) (3) (5)  Bar');
    })
});

describe("islegalBarcode test",function(){
    it("islegalBarcode test ",function(){
        let inputs = '|:|:|:|:::|:|:|:|:|:::|:|:|:::||'.trim();
        let result = sec.islegalBarcode(inputs);
        expect(result).toEqual(true);
    });
    it("islegalBarcode test ",function(){
        let inputs = '123||+*'.trim();
        let result = sec.islegalBarcode(inputs);
        expect(result).toEqual(false);
    });

}) ;

describe("islegalFrame test",function(){
    it("islegalFrame test ",function(){
        let inputs = '| :: |';
        let result = sec.isLegalFrame(inputs);
        expect(result).toEqual(true);
    });
    it("islegalFrame test ",function(){
        let inputs = '||:: |';
        let result = sec.isLegalFrame(inputs);
        expect(result).toEqual(false);
    });
    it("islegalFrame test ",function(){
        let inputs = '| :::|';
        let result = sec.isLegalFrame(inputs);
        expect(result).toEqual(false);
    });
    it("islegalFrame test ",function(){
        let inputs = '| :::|';
        let result = sec.isLegalFrame(inputs);
        expect(result).toEqual(false);
    });
    it("islegalFrame test ",function(){
        let inputs = ':|   |';
        let result = sec.isLegalFrame(inputs);
        expect(result).toEqual(false);
    });
    it("islegalFrame test ",function(){
        let inputs = '| :: |:';
        let result = sec.isLegalFrame(inputs);
        expect(result).toEqual(false);
    });
    it("islegalFrame test ",function(){
        let inputs = '|  ';
        let result = sec.isLegalFrame(inputs);
        expect(result).toEqual(false);
    })


}) ;

describe("matchBarcode Testtest",function(){
    it("type one matchBarcode test ",function(){
        let inputs = '|:::| |:::|';
        let result = sec.matchBarcode(inputs);
        expect(result).toEqual(true);
    });
    it("type two matchBarcode test ",function(){
        let inputs = '|||||';
        let result = sec.matchBarcode(inputs);
        expect(result).toEqual(false);
    });
    it("type three matchBarcode test ",function(){
        let inputs = '*****';
        let result = sec.matchBarcode(inputs);
        expect(result).toEqual(false);
    });
    it("type foure matchBarcode test ",function(){
        let inputs = '|:|:|   |||||';
        let result = sec.matchBarcode(inputs);
        expect(result).toEqual(false);
    });
    it("type five matchBarcode test ",function(){
        let inputs = '||||   |||||';
        let result = sec.matchBarcode(inputs);
        expect(result).toEqual(false);
    })

}) ;

























