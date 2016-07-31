const a = require('../../transformer/transformToBarcode');

describe("transformToBarcode", function () {
    it("should return postcode", function () {
        let input = "45056-1234";
        let result = a.transformToBarcode(input);
        let barcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|\ncd is 0';
        expect(result).toEqual(barcode);
    });
    it("should return postcode", function () {
        let input = "4504";
        let result = a.transformToBarcode(input);
        let tip = 'error';
        expect(result).toEqual(tip);
    });
});

describe("loadAllDigit", function () {
    it("should return array", function() {
        let array = ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let result = a.loadAllDigit();
        expect(result).toEqual(array);
    });
});

describe("isValidCode", function () {
    it("should return boolean", function () {
        let input = "45056-1234";
        let result = a.isValidCode(input);
        let flag = true;
        expect(result).toEqual(flag);
    });
    it("should return boolean", function () {
        let input = "45056-1@5";
        let result = a.isValidCode(input);
        let flag = false;
        expect(result).toEqual(flag);
    });
});

describe("getCodeNumber", function () {
    it("should return barcodes", function () {
        let input = "45056-1234";
        let result = a.getCodeNumber(input);
        let codeNumber = "450561234";
        expect(result).toEqual(codeNumber);
    });
    it("should return barcodes", function () {
        let input = "450-56234";
        let result = a.getCodeNumber(input);
        let codeNumber = 'error';
        expect(result).toEqual(codeNumber);
    });
});

describe("isValidCodeLength", function () {
    it("should return leagal codes", function () {
        let input = '450561234';
        let result = a.isValidCodeLength(input);
        let flag = true;
        expect(result).toEqual(flag);
    });
    it("should return leagal codes", function () {
        let input = '4505612347';
        let result = a.isValidCodeLength(input);
        let flag = false;
        expect(result).toEqual(flag);
    });
    it("should return leagal codes", function () {
        let input = '5845';
        let result = a.isValidCodeLength(input);
        let flag = false;
        expect(result).toEqual(flag);
    });
});

describe("calculateCD", function () {
    it("should return barcodes cd", function () {
        let input = "56871";
        let result = a.calculateCD(input);
        let cd = 3;
        expect(result).toEqual(cd);
    });
    it("should return barcodes cd", function () {
        let input = "55299";
        let result = a.calculateCD(input);
        let cd = 0;
        expect(result).toEqual(cd);
    });

});

describe("getCompleteCode", function () {
    it("should return code and cd", function () {
        let code = "450561234";
        let cd = 0;
        let result = a.getCompleteCode(code, cd);
        let checkedCode = '4505612340';
        expect(result).toEqual(checkedCode);
    });
});

describe("getBarcode", function () {
    it("should return barcode", function () {
        let checkedCode = '4505612340';
        let cd = 0;
        let result = a.getBarcode(checkedCode, a.loadAllDigit(), cd);
        let barcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|\ncd is 0';
        expect(result).toEqual(barcode);
    });
});







