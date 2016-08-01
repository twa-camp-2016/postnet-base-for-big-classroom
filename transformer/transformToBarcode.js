'use strict';
class PostCodetoBarcodeTransformer {
    transformToBarcode(postCode) {
        let digits = loadAllDigit();
        let flag = isValidCode(postCode);
        let flag1 = getCodeNumber(postCode);
        let flag2 = isValidCodeLength(flag1);

        if (flag === false) {
            return `error: 输入的邮编只能含有数字和-`;
        }

        if (flag1 === false) {
            return `error: 输入的邮编中-的位置必须在第六位`;
        }

        if (flag2 === false) {
            return `error: 输入的邮编位数必须是5或9`;
        }

        if (flag && flag2 && flag1 != 'error') {
            let cd = calculateCD(flag1);
            let checkedCode = getCompleteCode(flag1, cd);
            return getBarcode(checkedCode, digits, cd);
        }
    }
}

function loadAllDigit() {
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}

function isValidCode(code) {
    return /^[\d-]+$/.test(code);
}

function getCodeNumber(postCode) {
    if (postCode.indexOf('-') !== -1) {
        if (postCode.indexOf('-') === 5) {
            let splitCode = postCode.split('-');
            return splitCode[0] + splitCode[1];
        } else {
            return false;
        }
    } else {
        return postCode;
    }
}

function isValidCodeLength(postCode) {
    return postCode.length === 5 || postCode.length === 9;

}

function calculateCD(codeNumber) {
    let cd = 0;
    let array = codeNumber.split('');
    let sum = array.reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    });

    if (sum % 10 === 0) {
        cd = 0;
    } else {
        cd = 10 - sum % 10;
    }
    return cd;
}


function getCompleteCode(code, cd) {
    return code + cd;
}

function getBarcode(checkedCode, digits, cd) {
    let postCodeArray = checkedCode.split('');
    let barcode = '|';
    let barcodeArray = postCodeArray.map((item) => {
        return digits[item];
    });
    barcode += (barcodeArray.join('') + '|');

    return barcode + '\n' + 'cd is ' + cd;
}

module.exports = PostCodetoBarcodeTransformer;


