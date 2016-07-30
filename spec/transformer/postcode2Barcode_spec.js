'use strict';
const method = require('../../transformer/postcode2Barcode.js');

describe('isLegalBarcode', function () {
    it('isLegalBarcode', function () {
        let input = ':| '
        let result = method.isLegalBarcode(input);
        expect(result).toEqual(true);
    })
});

describe('isLegalBarcode', function () {
    it('isLegalBarcode', function () {
        let input = 'aaa';
        let result = method.isLegalBarcode(input);
        expect(result).toEqual(false);
    })
});

describe('isLegalFrame', function () {
    it('isLegalFrame', function () {
        let input = '| | |';
        let input1 = '| ** |';
        let result = method.isLegalFrame(input && input1);
        expect(result).toEqual(true);
    })
});

describe('isLegalFrame', function () {
    it('isLegalFrame', function () {
        let input = '|  | ';
        let input1 = '| ';
        let result = method.isLegalFrame(input && input1);
        expect(result).toEqual(false);
    })
});

describe('isLegalLength', function () {
    it('isLegalLength', function () {
        let input = '*****';
        let input1 = '|||||';
        let result = method.isLegalLength(input && input1);
        expect(result).toEqual(true);
    })
});

describe('isLegalLength', function () {
    it('isLegalLength', function () {
        let input = '|||||  |||||';
        let input1 = '||||   |||||';
        let result = method.isLegalLength(input && input1);
        expect(result).toEqual(false);
    })
});

describe('isWholeLegalLength', function () {
    it('isWholeLegalLength', function () {
        let input = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        let result = method.isWholeLegalLength(input);
        expect(result).toEqual(true);
    })
});

describe('isWholeLegalLength', function () {
    it('isWholeLegalLength', function () {
        let input = '|||||  |||||';
        let input1 = '|||||||||';
        let result = method.isWholeLegalLength(input && input1);
        expect(result).toEqual(false);
    })
});

describe('formateBarcode', function () {
    it('formateBarcode', function () {
        let input = '| ::::: ||||| |';
        let result = method.formateBarcode(input);
        expect(result).toEqual([':::::', '|||||']);
    })
});

describe('getInitialZipCode', function () {
    it('getInitialZipCode', function () {
        let input = [':::::', '|||||'];
        let input1 = [
            {key: '0', value: '||:::'}, {key: '1', value: ':::||'},
            {key: '2', value: '::|:|'}, {key: '3', value: '::||:'},
            {key: '4', value: ':|::|'}, {key: '5', value: ':|:|:'},
            {key: '6', value: ':||::'}, {key: '7', value: '|:::|'},
            {key: '8', value: '|::|:'}, {key: '9', value: '|:|::'}
        ];
        let result = method.getInitialZipCode(input, input1);
        expect(result).toEqual('not found this barcode!')
    })
});

describe('getInitialZipCode', function () {
    it('getInitialZipCode', function () {
        let input = [':|::|', ':|:|:', '||:::', ':|:|:', ':||::', ':::||', '::|:|', '::||:', ':|::|', '||:::'];
        let input1 = [
            {key: '0', value: '||:::'}, {key: '1', value: ':::||'},
            {key: '2', value: '::|:|'}, {key: '3', value: '::||:'},
            {key: '4', value: ':|::|'}, {key: '5', value: ':|:|:'},
            {key: '6', value: ':||::'}, {key: '7', value: '|:::|'},
            {key: '8', value: '|::|:'}, {key: '9', value: '|:|::'}
        ];
        let result = method.getInitialZipCode(input, input1);
        expect(result).toEqual('4505612340');
    })
});

describe('getBarcodeCd', function () {
    it('getBarcodeCd', function () {
        let input = '4505612340';
        let result = method.getBarcodeCd(input);
        expect(result).toEqual('0');
    })
});

describe('getLegalBarcode', function () {
    it('getLegalBarcode', function () {
        let input = '4505612340';
        let input1 = '0';
        let result = method.getLegalBarcode(input, input1);
        expect(result).toEqual('450561234');
    })
});

describe('getLegalBarcode', function () {
    it('getLegalBarcode', function () {
        let input = '4505612341';
        let input1 = '1';
        let result = method.getLegalBarcode(input, input1);
        expect(result).toEqual('this barcode cannot be validated');
    })
});

describe('formatLastBarcode', function () {
    it('formatLastBarcode', function () {
        let input = '450561234';
        let result = method.formatLastBarcode(input);
        expect(result).toEqual('45056-1234');
    })
});

describe('checkZipCode', function () {
    it('checkZipCode', function () {
        let input = '12345';
        let input1 = '123456789'
        let input2 = '12345-1234';
        let result = method.checkZipCode(input && input1 && input2);
        expect(result).toEqual(true);
    })
});

describe('checkZipCode', function () {
    it('checkZipCode', function () {
        let input = '123456';
        let input1 = '12345678a'
        let input2 = '1234-51234';
        let result = method.checkZipCode(input && input1 && input2);
        expect(result).toEqual(false);
    })
});

describe('getDigitCode', function () {
    it('getDigitCode', function () {
        let input = '12345-1234'
        let result = method.getDigitCode(input);
        expect(result).toEqual('123451234');
    })
});

describe('getZipCodeCd', function () {
    it('getZipCodeCd', function () {
        let input = '123451234'
        let result = method.getZipCodeCd(input);
        expect(result).toEqual(5);
    })
});

describe('getWholeZipCode', function () {
    it('getWholeZipCode', function () {
        let input = '123451234'
        let input1 = 5;
        let result = method.getWholeZipCode(input, input1);
        expect(result).toEqual('1234512345');
    })
});

describe('getInitialBarcode', function () {
    it('getInitialBarcode', function () {
        let input = '1';
        let input1 = [{key: '1', value: ':::||'}];
        let result = method.getInitialBarcode(input1, input);
        expect(result).toEqual(':::||');
    })
});

describe('getBarcode', function () {
    it('getBarcode', function () {
        let input = ':::||';

        let result = method.getBarcode(input);
        expect(result).toEqual('|:::|||');
    })
});