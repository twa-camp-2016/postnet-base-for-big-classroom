/**
 * Created by ritter on 16-7-28.
 */
"use strict";

function loadAllBarcodes() {
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}

function isValidationBarcode(barcodes) {
    return (/^\|[|: ]+\|$/.test(barcodes));
}

function formateBarcode(barcodes, allBarcodes) {
    let barArray = barcodes.substring(1, barcodes.length - 1).split(' ');
    let postArr = [];
    barArray.map(function (b) {
        if (allBarcodes.indexOf(b) !== -1) {
            postArr.push(allBarcodes.indexOf(b))
        }
    });
    return postArr;
}

function checkValidation(postArr) {
    let total = postArr.reduce(function (a, b) {
        return a + b;
    });
    total -= postArr[postArr.length - 1];
    if (total % 10 === 0) {
        return postArr[postArr.length - 1] === 0;
    }
    return (10 - total % 10 ) === postArr[postArr.length - 1]
}

function formateResult(postArr) {
    let barcode = '';
    barcode += postArr.join('').substring(0, postArr.length - 1);
    if (postArr.length === 6) {
        return barcode;
    } else {
        let tempFomer = barcode.substring(0, 5);
        let tempLater = barcode.substring(5, barcode.length);
        return tempFomer + '-' + tempLater;
    }
}
class BarcodeToPost {

    changeBarcode(barcodes) {
        let allBarcodes = loadAllBarcodes();
        let validation = isValidationBarcode(barcodes);
        if (validation) {
            let postArr = formateBarcode(barcodes, allBarcodes);
            if (checkValidation(postArr)) {
                return formateResult(postArr)
            }
        }
        return 'error';
    }
}

module.exports = BarcodeToPost;
