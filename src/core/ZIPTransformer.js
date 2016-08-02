/**
 * Created by wanggenwang on 16-7-28.
 */
/* global module */
function checkZIP(ZIP) {
    return (/^\d{5}$|^\d{9}$|^\d{5}-\d{4}$/).test(ZIP);
}
function formatZIP(ZIP) {
    return ZIP.replace('-', '').split('').map(c=>Number(c));
}
function loadAllBarcodes() {
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}
function getCheckDigit(formattedZIP) {
    let sum = formattedZIP.reduce((pre, curr)=>pre + curr);
    let arr = Array.from({length: 10}, (c, i)=>i);
    return arr.find(c=>(c + sum) % 10 === 0);
}
function getBarcode(formattedZIP, checkDigit, barcodes) {
    return '|' + formattedZIP.reduce((pre, curr)=>pre + barcodes[curr], '') + barcodes[checkDigit] + '|';
}

class ZIPTransformer {
    ZIPToBarcode(ZIP) {
        if (!checkZIP(ZIP))
        //noinspection JSConstructorReturnsPrimitive
            return undefined;
        let formattedZIP = formatZIP(ZIP);
        let barcodes = loadAllBarcodes();
        let checkDigit = getCheckDigit(formattedZIP);
        return getBarcode(formattedZIP, checkDigit, barcodes);
    }
}

module.exports = ZIPTransformer;


