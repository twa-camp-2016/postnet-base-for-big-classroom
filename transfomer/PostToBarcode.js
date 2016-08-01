
/**
 * Created by ritter on 16-7-28.
 */
"use strict";

function loadAllBarcodes() {
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}

function isValidation(tags) {
    if (/^\d{5}$|^\d{9}$|^\d{5}-\d{4}$/.test(tags)) {
        return tags;
    }
    return false;
}

function fomateCode(tags) {
    tags = tags.replace('-', '').split('');
    return tags.map(function (tag) {
        return parseInt(tag);
    })
}

function calculateValidaion(result) {
    let total = result.reduce(function (a, b) {
        return a + b;
    });
    let validate = total % 10;
    return validate === 0 ? validate : 10 - validate;
}

function getBarcodes(result, valite, allBarcodes) {
    let barcodes = '|';
    barcodes += result.map(function (r) {
        return r = allBarcodes[r];
    }).join('');
    barcodes += allBarcodes[valite] + '|';
    return barcodes;
}

class PostToBarcode {

    changePost(tags) {
        let allBarcodes = loadAllBarcodes();
        if (isValidation(tags)) {
            let result = fomateCode(tags);
            let valite = calculateValidaion(result);
            let barcodes = getBarcodes(result, valite, allBarcodes);
            return tags + '=' + barcodes + '\n' + valite;
        }
        return 'error';
    }
}

module.exports = PostToBarcode;
