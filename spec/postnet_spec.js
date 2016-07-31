'use strict';
const postnet = require('../src/postnet.js')

describe("isLegalZIPCode", function () {
    it("should return ZIP Code", function () {
        let code = "46765";
        expect(postnet.a(code)).toEqual(true);
    });

    it("should return ZIP Code", function () {
        let code = "46765-7890";
        expect(postnet.a(code)).toEqual(true);
    });

    it("should return ZIP Code", function () {
        let code = "467657890";
        expect(postnet.a(code)).toEqual(true);
    });
    it("should return ZIP Code", function () {
        let code = "yuui";
        expect(postnet.a(code)).toEqual(false);
    })
});

describe("calculateCheckDigit", function () {
    it("should return check digit", function () {
        let code = "46765";
        let result = postnet.c(code);
        expect(result).toEqual(2);

    })

    it("should return check digit", function () {
        let code = "11111-1111";
        let result = postnet.c(code);
        expect(result).toEqual(1);

    })

    it("should return check digit", function () {
        let code = "111111111";
        let result = postnet.c(code);
        expect(result).toEqual(1);

    })
});

describe("getCodedZIPCode", function () {
    it("should return ZIP Code", function () {
        let code = "4";
        let result = postnet.d(code, 2, postnet.b());
        expect(result).toEqual("|:|::|::|:||");
    })

    it("should return ZIP Code", function () {
        let code = "4-";
        let result = postnet.d(code, 2, postnet.b());
        expect(result).toEqual("|:|::|::|:||");
    })
})

describe("isLegalBarcode", function () {
    it("should return legal code", function () {
        let temp = '条形码';
        expect(postnet.e(temp)).toEqual(false);
    })
})

describe("isLegalFrame", function () {
    it("should return legal code", function () {
        let temp = '| |';
        expect(postnet.f(temp)).toEqual(false);
    })
})

describe("isLegalLength", function () {
    it("should return  legal length", function () {
        let temp = "| ||: ::|:|";
        expect(postnet.g(temp)).toEqual(false);
    })

    it("should return  legal length", function () {
        let temp = "| ||:|| ::|:| |";
        expect(postnet.g(temp)).toEqual(true);
    })
})

describe("reformBarcode", function () {
    it("should return reformed code", function () {
        let barcode = "| |::|: ::|:| ";
        expect(postnet.h(barcode)).toEqual(["|::|:", "::|:|"])
    })
})


describe("getEncodedBarcode", function () {
    it("should return encodeBarcode and the truth of match", function () {
        let barcode = ["|::|:", "::|:|"];
        let result = postnet.i(postnet.b(), barcode);
        expect(result).toEqual([8, 2]);
    })
})
describe("checkDigitTruty", function () {
    it("should return encodeObject and the truth of checkDigit", function () {
        let encodeObject = [8, 2];
        let result = postnet.j(encodeObject);
        expect(result).toEqual(true);
    })
})
describe("getZIPCode", function () {
    it("should return ZIP Cde", function () {
        let encodeObject =  [9, 3, 3, 3, 3, 3, 3, 3, 3, 4];
        expect(postnet.m(encodeObject)).toEqual("933333333");
    })

    /*it("should return ZIP Code", function () {
        let encodeObject = [9, 3, 3, 3, 3, 3, 3, 3, 3, 4];
        expect(postnet.m(encodeObject)).toEqual("93333-3333");
    })*/
})
describe(" zipcodeChangeBarcode",function () {
    it("should return result",function () {
        let ZIP_code="46725";
        let result=postnet.zipcodeChangeBarcode(ZIP_code);
        expect(result).toEqual("|:|::|:||::|:::|::|:|:|:|::||::|");
    })

    it("should return result",function () {
        let ZIP_code="46a25";
        let result=postnet.zipcodeChangeBarcode(ZIP_code);
        expect(result).toEqual(undefined);
    })
})

describe("barcodeChangeZipcode",function () {
    it("should return result",function () {
        let barcode="| :|::| :||:: |:::| ::|:| :|:|: :||:: |";
        let result=postnet.barcodeChangeZipcode((barcode));
        expect(result).toEqual("46725");
    })

    it("should return result",function () {
        let barcode="| :|::| :||:: |:::| ::|:| :|:|: |:::| |";
        let result=postnet.barcodeChangeZipcode((barcode));
        expect(result).toEqual(undefined);
    })
})

