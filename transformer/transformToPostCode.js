'use strict';
function transformToPostCode(barcode){
    let digits = loadAllDigit();
    let flag = isValidBarcodeDigit(barcode);
    let flag1 = isHasFrame(barcode);
    let flag2 = isValidBarcodeLength(barcode);

    if(flag && flag1 && flag2) {
        let digitsArray = getDigitsArray(barcode)
        let postCodeArray = changePostCodeArray(digitsArray, digits);
        let codeArray = checkCD(postCodeArray);
        return getPostCode(codeArray);
    }else{
        return 'error';
    }
}

function loadAllDigit() {
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}

function isValidBarcodeDigit(barcode) {
    return /^[\|: ]+$/.test(barcode);
}

function isHasFrame(barcode) {
    return barcode.slice(0, 2) === "| " && barcode.slice(-2) === " |";
}

function isValidBarcodeLength(barcode) {
    let array1 = barcode.slice(2, -2).split(" ");
    return array1.length === 6 || array1.length === 10;

}

function getDigitsArray(barcode) {
    return barcode.slice(2, -2).split(' ');
}


function changePostCodeArray(array, digits) {
    return array.map((item) => digits.indexOf(item));
}


function checkCD(array) {
    let temp = array.reduce((a, b) => a + b);

    return temp % 10 === 0 ? array : 'error';
}


function getPostCode(codeArray) {
    if(codeArray.length === 10){
        codeArray.splice(5, 0, '-');
    }

    let postCode = codeArray.join('');
    let code = postCode.substring(0, postCode.length-1);
    let cd = postCode.substr(postCode.length-1, 1);
    return code + '\n' + 'cd is ' + cd;
}


module.exports = {
    transformToPostCode: transformToPostCode,
    loadAllDigit: loadAllDigit,
    isValidBarcodeDigit: isValidBarcodeDigit,
    isHasFrame: isHasFrame,
    isValidBarcodeLength: isValidBarcodeLength,
    getDigitsArray: getDigitsArray,
    changePostCodeArray: changePostCodeArray,
    checkCD: checkCD,
    getPostCode: getPostCode,
};