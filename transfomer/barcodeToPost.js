"use strict";

class  BarcodeToPost {

    changeBarcode(barcodes) {
        let allBarcodes = this.loadAllBarcodes();
        let validation = this.isValidationBarcode(barcodes);
        if (validation) {
            let postArr = this.formateBarcode(barcodes, allBarcodes);
            if (this.checkValidation(postArr)) {
                return this.formateResult(postArr)
            }
        }
        return 'error';
    }

    loadAllBarcodes() {
        return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
    }

    isValidationBarcode(barcodes) {
        return (/^\|[|: ]+\|$/.test(barcodes));
    }

    formateBarcode(barcodes, allBarcodes) {
        let barArray = barcodes.substring(1, barcodes.length - 1).split(' ');
        let postArr = [];
        barArray.map(function (b) {
            if (allBarcodes.indexOf(b) !== -1) {
                postArr.push(allBarcodes.indexOf(b))
            }
        });
        return postArr;
    }

    checkValidation(postArr) {
        let total = postArr.reduce(function (a, b) {
            return a + b;
        });
        total -= postArr[postArr.length - 1];
        if (total % 10 === 0) {
            return postArr[postArr.length - 1] === 0;
        }
        return (10 - total % 10 ) === postArr[postArr.length - 1]
    }

    formateResult(postArr) {
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
}


module.exports = BarcodeToPost;
