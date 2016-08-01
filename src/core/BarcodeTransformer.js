/**
 * Created by wanggenwang on 16-7-28.
 */

/* global module */

function checkBarcode(barcode) {
    return (/(^\|\s(\|\|:::\s|:::\|\|\s|::\|:\|\s|::\|\|:\s|:\|::\|\s|:\|:\|:\s|:\|\|::\s|\|:::\|\s|\|::\|:\s|\|:\|::\s){6}\|$|^\|\s(\|\|:::\s|:::\|\|\s|::\|:\|\s|::\|\|:\s|:\|::\|\s|:\|:\|:\s|:\|\|::\s|\|:::\|\s|\|::\|:\s|\|:\|::\s){10}\|$)/).test(barcode);
}
function formatBarcode(barcode) {
    return barcode.slice(2,-2).split(' ');
}
function loadAllBarcodes() {
    return ['||:::',':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','|:|::'];
}
function barcodeToNumbers(formattedBarcode,barcodes) {
    return formattedBarcode.map(c=>barcodes.findIndex(cu=>cu===c));
}
function validateCheckDigit(numbers) {
    return numbers.reduce((pre, curr)=>pre + curr) % 10 === 0;
}
function getZIP(numbers) {
    return numbers.reduce((pre,curr)=>pre+curr,'').slice(0,-1);
}

class BarcodeTransformer{
    barcodeToZIP(barcode) {
        if(!checkBarcode(barcode))
            return undefined;
        let formattedBarcode=formatBarcode(barcode);
        let barcodes=loadAllBarcodes();
        let numbers=barcodeToNumbers(formattedBarcode,barcodes);
        if(!validateCheckDigit(numbers))
            return undefined;
        return getZIP(numbers);
    }
}
module.exports=BarcodeTransformer;


