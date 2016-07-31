/**
 * Created by Sunshine on 2016/7/31.
 */
function secPostCode(postCode) {
    return /^\d{5}(-?\d{4})?$/.test(postCode);
}

function formatPostCode(postCode) {
    return (postCode.length === 10 ? postCode.replace('-', '') : postCode).split('');
}

function getSecCode(formatPostcode) {
    let count = formatPostcode.reduce(function (code, sum) {
        return Number(code) + Number(sum);
    }, 0);
    return (parseInt(count / 10) + 1) * 10 - count;
}

function getPostSecCode(formatPostcode, secCode) {
    formatPostcode.push(secCode + '');
    return formatPostcode;
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

function matchPostcode(barcodes, postSecCode) {
    return postSecCode.map(function (code) {
        let exist = barcodes.find(function (bar) {
            return bar.item === code;
        });
        if (exist) {
            return exist.barcode;
        }
    });
}

function getBarcodeStr(postBarcodes, postCode) {
    let str = 'Validation Check: ' + postCode + ' == |';
    postBarcodes.forEach(function (code) {
        str += code;
    });
    str += '|\n\ncd is 0';
    return str;
}

class PostcodeToBarcode {

    printBarcode(postCode) {
        let sec_correct = secPostCode(postCode);
        if (!sec_correct) {
            return;
        }
        let formatPostcode = formatPostCode(postCode);
        let secCode = getSecCode(formatPostcode);
        let postSecCode = getPostSecCode(formatPostcode, secCode);
        let barcodes = loadAllBarcodes();
        let postBarcodes = matchPostcode(barcodes, postSecCode);
        let barcodeStr = getBarcodeStr(postBarcodes, postCode);

        return barcodeStr;
    }
}
module.exports = PostcodeToBarcode;