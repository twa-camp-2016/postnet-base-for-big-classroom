/**
 * Created by Sunshine on 2016/7/31.
 */

function islegalBarcode(inputs) {
    return /^[\s|:|\|]+$/.test(inputs);
}

function isLegalFrame(barCode) {
    return /^\|\s[\||:|\s]+\s\|$/.test(barCode);
}

function matchBarcode(barCode) {
    let reg = /^:::\|\||::\|:\||::\|\|:|:\|::\||:\|:\|:|:\|\|::|\|:::\||\|::\|:|\|:\|::|\|\|:::$/;
    let exist = barCode.split(' ').find(function (code) {
        if (!reg.test(code)) {
            return true;
        }
    });
    if (exist) {
        return false;
    }
    return true;
}
function secBarCode(barCode) {

    if (!(barCode.length === 39 || barCode.length === 63)) {
        return false;
    }
    if (!isLegalFrame(barCode)) {
        return false;
    }
    if (!islegalBarcode(barCode)) {
        return false;
    }
    if (!matchBarcode(barCode.substring(2, barCode.length - 2))) {
        return false;
    }
    return true;

}

function formatBarCode(barCode) {
    return barCode.substring(2, barCode.length - 2).split(' ');
}

function getPostCode(barcodes, formatBarcode) {
    let codeStr = '';
    formatBarcode.forEach(function (barcode) {
        let exist = barcodes.find(function (code) {
            return code.barcode === barcode;
        });
        if (exist) {
            codeStr += exist.item;
        }
    });
    return codeStr;
}

function checkSecCode(postCode) {

    let secCode1 = postCode[postCode.length - 1];
    let secCode2 = getSecCode(postCode.substring(0, postCode.length - 1).split(''));
    return Number(secCode1) === Number(secCode2);
}

function getPostStr(postCode, barCode) {

    let postcodeStr = postCode.substring(0, postCode.length - 1);
    let i = 0;
    let str = 'Example:    ' + barCode;
    str += '\nBar Code    Frame   ';
    postcodeStr.split('').forEach(function (code) {
        str += 'Digit-' + (++i) + ' ';
    });
    str += 'CD  Frame\n';
    str += postcodeStr.length === 9 ? postcodeStr.substring(0, 5) + '-' + postcodeStr.substring(5, postcodeStr.length) : postcodeStr;
    str += '     Bar';
    postCode.split('').forEach(function (code) {
        str += '(' + code + ') '
    });
    str += ' Bar';

    return str;
}

function loadAllBarcodes() {
    return [
        {item: '1', barcode: ':::||'}, {item: '2', barcode: '::|:|'},
        {item: '3', barcode: '::||:'}, {item: '4', barcode: ':|::|'},
        {item: '5', barcode: ':|:|:'}, {item: '6', barcode: ':||::'},
        {item: '7', barcode: '|:::|'}, {item: '8', barcode: '|::|:'},
        {item: '9', barcode: '|:|::'}, {item: '0', barcode: '||:::'}
    ];
}


class BarcodeToPostcode {

    printPostCode(barCode) {
        let sec_collection = secBarCode(barCode);
        if (!sec_collection) {
            return false;
        }
        let formatBarcode = formatBarCode(barCode);
        let barcodes = loadAllBarcodes();
        let postCode = getPostCode(barcodes, formatBarcode);
        let check_result = checkSecCode(postCode);
        if (!check_result) {
            return false;
        }
        let postCodeStr = getPostStr(postCode, barCode);
        return postCodeStr;
    }
}

module.exports = BarcodeToPostcode;