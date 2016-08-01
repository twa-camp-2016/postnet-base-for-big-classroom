'use strict'


function checkZipCode(input) {
    let reg = /^\d{5}(-?\d{4})?$/;
    if (reg.test(input)) {
        return true;
    }
    return false;
}

function codeList () {
        return ([
            {key: '0', value: '||:::'}, {key: '1', value: ':::||'},
            {key: '2', value: '::|:|'}, {key: '3', value: '::||:'},
            {key: '4', value: ':|::|'}, {key: '5', value: ':|:|:'},
            {key: '6', value: ':||::'}, {key: '7', value: '|:::|'},
            {key: '8', value: '|::|:'}, {key: '9', value: '|:|::'}]);
}

function getDigitCode(input) {
    return input.replace('-', '');
}

function getZipCodeCd(digitCode) {
    let cd = 0;
    let sum = 0;
    if (digitCode.length <= 10) {
        let arr = digitCode.split('');
        sum = arr.reduce(function (a, b) {
            return parseInt(a) + parseInt(b)
        }, 0);
        cd = 10 - parseInt(sum % 10);
    }
    return cd;
}

function getWholeZipCode(digitCode, cd) {
    return digitCode + cd;
}

function getInitialBarcode(codeList, wholeCode) {
    let str = '';
    let arr = wholeCode.split('');
    arr.filter(function (item) {
        codeList.find(function (it) {
            if (it.key === item) {
                str += it.value;
            }
        })
    })
    return str;
}

function getBarcode(initialBarcode) {
    let input = initialBarcode;
    input = '|' + input + '|';
    return input;
}

class ZipCode{
 
    dealZipcode(input) 
    {
    let codeList1 = codeList();
    let isLegalInput = checkZipCode(input);
    if (isLegalInput)
    {
        let digitCode = getDigitCode(input);
        let cd = getZipCodeCd(digitCode);
        let wholeCode = getWholeZipCode(digitCode, cd);
        let initialBarcode = getInitialBarcode(codeList1, wholeCode);
        let bar = getBarcode(initialBarcode);
        return bar;
    }
    else {
        return 'please check your zip code!';
    }
    }
}

module.exports = ZipCode;