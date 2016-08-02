'use strict';
let allRegulars = [
    "||:::",
    ":::||",
    "::|:|",
    "::||:",
    ":|::|",
    ":|:|:",
    ":||::",
    "|:::|",
    "|::|:",
    "|:|::"
];
function isLegalBarcode(barcode) {
    //验证条码内容是否合法
    let barcodeType = Array.from(barcode).every(function (element) {
        return element === ":" || element === "|" || element === " ";
    });
    //验证条码框架是否合法
    let barcodeForm = barcode.length >= 4 && barcode.slice(0, 2) === "| " && barcode.slice(-3, -1);
    //验证连续的是否由5个字符组成
    let barcodeContinuity = barcode.slice(2, -2).split(" ").every(function (element) {
        return element.length === 5;
    });
    return barcodeType && barcodeForm && barcodeContinuity;

}
//格式化条码(去掉左右的“｜”,5个一分割，存入一个数组)
function formatBarcode(barcode) {
    return barcode.slice(2, -2).split(' ');
}
//匹配
function matchPostcode(formattedBarcode, allRegulars) {
    let finalPostcode = formattedBarcode.map(function (item) {
        return allRegulars.indexOf(item);
    });
    let lastElement = parseInt(finalPostcode.join("").slice(-1));
    let sum = finalPostcode.slice(0, finalPostcode.length - 1).reduce(function (first, second) {
        return first + second;
    }, 0);
    return (10 - (sum % 10) === lastElement) ? parseInt(finalPostcode.join("")) : false;
}
class Barcode {
    transform(barcode) {
        let isLegal = isLegalBarcode(barcode);
        if (!isLegal) {
            return undefined;
        }
        let formattedBarcode = formatBarcode(barcode);
        return matchPostcode(formattedBarcode, allRegulars);
    }
}
module.exports = Barcode;