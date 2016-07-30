'use strict'

let codeList =
    [
        {key: '0', value: '||:::'}, {key: '1', value: ':::||'},
        {key: '2', value: '::|:|'}, {key: '3', value: '::||:'},
        {key: '4', value: ':|::|'}, {key: '5', value: ':|:|:'},
        {key: '6', value: ':||::'}, {key: '7', value: '|:::|'},
        {key: '8', value: '|::|:'}, {key: '9', value: '|:|::'}
    ];
let input = '12345'
    //'| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
function isLegalBarcode(input) {
    return /^[|: ]+$/.test(input);
}

function isLegalFrame(input) {
    return ((input[0] === '|') && (input[1] === ' ') && (input[input.length - 2] === ' ') && (input[input.length - 1] === '|'));
}

function isLegalLength(input) {
    let arr=input.split(' ');
   
    let arr1=arr.slice(1,arr.length-1);
    if (arr1.filter(item=>item.length !== 5).length != 0)
        return false;
    return true;
}

function isWholeLegalLength(input) {
    return !(input.length !== 39 && input.length !== 63);

}

function formateBarcode(input) {

    return input.slice(2, input.length - 2).split(' ');
}

function getInitialZipCode(formattedBarcode, codeList) {
    let str = '';
    formattedBarcode.filter(function (item) {
        codeList.find(function (it) {
            if (it.value === item) {
                str = str + it.key;
            }
        })
    })
    if (formattedBarcode.length === str.length)
        return str;
    else return 'not found this barcode!'
}

function getBarcodeCd(initialZipCode) {
    let cd;
    cd = initialZipCode[initialZipCode.length - 1];
    return cd;
}

function getLegalBarcode(initialZipCode, cd) {
    let arr1 = initialZipCode.split('');
    let arr = arr1.slice(0, arr1.length - 1);
    let sum = arr.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    if (parseInt(sum % 10) === 0 && parseInt(cd) === 0) {
        return arr.join('');
    }
    else if (parseInt(sum % 10) !== 0) {
        let c = 10 - parseInt(sum % 10);
        if (c === parseInt(cd)) {
            return arr.join('');
        }
    }
    return 'this barcode cannot be validated';
}

function formatLastBarcode(legalBarcode) {
    if (legalBarcode.length === 9) {
        let str = legalBarcode.replace(legalBarcode[4],
            legalBarcode[4] + '-');
        return str;
    }
    return legalBarcode;
}

function checkZipCode(input) {
    let reg = /^\d{5}(-?\d{4})?$/;
    if (reg.test(input)) {
        return true;
    }
    return false;
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

function getInitialBarcode1(codeList, wholeCode) {
    let str = '';
    for (let i = 0; i < wholeCode.length; i++) {
        for (let j = 0; j < codeList.length; j++) {
            if (wholeCode[i] === codeList[j].key) {
           
                str = str + codeList[j].value;
            }
        }
    }

    return str;
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

function dealZipcode(input) {
    let isLegalInput = checkZipCode(input);
    if (isLegalInput) {
        let digitCode = getDigitCode(input);
        let cd = getZipCodeCd(digitCode);
        let wholeCode = getWholeZipCode(digitCode, cd);
        let initialBarcode = getInitialBarcode(codeList, wholeCode);
        let bar = getBarcode(initialBarcode);
        return bar;
    }
    else {
        return 'please check your zip code!';
    }


}

function dealBarcode(input) {

    let isLegBar = isLegalBarcode(input);
    let isLegFrame = isLegalFrame(input);
    let isLegLen = isLegalLength(input);
    let isWholeLen = isWholeLegalLength(input);

    if (isLegBar && isLegFrame && isLegLen && isWholeLen) {

        let formattedBarcode = formateBarcode(input);
        let initialZipCode = getInitialZipCode(formattedBarcode, codeList);
        if (initialZipCode!=='not found this barcode!') {

            let cd = getBarcodeCd(initialZipCode);
            let legalBarcode = getLegalBarcode(initialZipCode, cd);
            if (legalBarcode!=='this barcode cannot be validated') {
                let formattedLastBarcode = formatLastBarcode(legalBarcode);
                return formattedLastBarcode;
            }
        }

    }
    return 'please check your barcode!';

}

function postnet(input) {
    if (input[0] === '|') {
        let zipcode = dealBarcode(input);
        return zipcode;
    }
    else {
        let barcode = dealZipcode(input);
        return barcode;
    }

}

//console.log(postnet(input));

module.exports = {
    isLegalBarcode: isLegalBarcode, isLegalFrame: isLegalFrame,
    isLegalLength: isLegalLength, isWholeLegalLength: isWholeLegalLength,
    formateBarcode: formateBarcode, getInitialZipCode: getInitialZipCode,
    getBarcodeCd: getBarcodeCd, getLegalBarcode: getLegalBarcode,
    formatLastBarcode: formatLastBarcode, checkZipCode: checkZipCode,
    getDigitCode: getDigitCode, getZipCodeCd: getZipCodeCd,
    getWholeZipCode: getWholeZipCode, getInitialBarcode: getInitialBarcode,
    getBarcode: getBarcode,dealZipcode:dealZipcode,dealBarcode:dealBarcode
};