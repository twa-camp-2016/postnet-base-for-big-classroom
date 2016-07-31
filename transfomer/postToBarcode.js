
/**
 * Created by ritter on 16-7-28.
 */
"use strict";

class PostToBarcode {

    changePost(tags) {
        let allBarcodes = this.loadAllBarcodes();
        if (this.isValidation(tags)) {
            let result = this.fomateCode(tags);
            let valite = this.calculateValidaion(result);
            let barcodes = this.getBarcodes(result, valite, allBarcodes);
            return tags + '=' + barcodes + '\n' + valite;
        }
        return 'error';
    }

    loadAllBarcodes() {
        return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
    }

    isValidation(tags) {
        if (/^\d{5}$|^\d{9}$|^\d{5}-\d{4}$/.test(tags)) {
            return tags;
        }
        return false;
    }

    fomateCode(tags) {
        tags = tags.replace('-', '').split('');
        return tags.map(function (tag) {
            return parseInt(tag);
        })
    }

    calculateValidaion(result) {
        let total = result.reduce(function (a, b) {
            return a + b;
        });
        let validate = total % 10;
        return validate === 0 ? validate : 10 - validate;
    }

    getBarcodes(result, valite, allBarcodes) {
        let barcodes = '|';
        barcodes += result.map(function (r) {
            return r = allBarcodes[r];
        }).join('');
        barcodes += allBarcodes[valite] + '|';
        return barcodes;
    }

}

module.exports = PostToBarcode;