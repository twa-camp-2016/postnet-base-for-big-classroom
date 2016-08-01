'use strict'
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

function codeList () {
    return ([
        {key: '0', value: '||:::'}, {key: '1', value: ':::||'},
        {key: '2', value: '::|:|'}, {key: '3', value: '::||:'},
        {key: '4', value: ':|::|'}, {key: '5', value: ':|:|:'},
        {key: '6', value: ':||::'}, {key: '7', value: '|:::|'},
        {key: '8', value: '|::|:'}, {key: '9', value: '|:|::'}]);
}

class Barcode{
    dealBarcode(input) {
    let codeList1 =codeList ();
    let isLegBar = isLegalBarcode(input);
    let isLegFrame = isLegalFrame(input);
    let isLegLen = isLegalLength(input);
    let isWholeLen = isWholeLegalLength(input);

    if (isLegBar && isLegFrame && isLegLen && isWholeLen) {

        let formattedBarcode = formateBarcode(input);
        let initialZipCode = getInitialZipCode(formattedBarcode, codeList1);
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
    
}

module.exports=Barcode;