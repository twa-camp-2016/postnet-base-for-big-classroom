function loadBars() {
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}

function isLegalLength(formatedBarcodes) {
    if (formatedBarcodes.length === 6 || formatedBarcodes.length === 10) {
        return true;
    }
    return false;
}

function barcodeLengthIsFive(barcode) {
    let temp = barcode.slice(2, barcode.length - 1);
    let result = temp.split(' ');
    let exist = result.find(function (ele) {
        return ele.length !== 5;
    });
    return exist ? false : true;
}

function isLegalBarcode(barcode) {
    return /^\| [|: ]+ \|$/.test(barcode);
}

function formatBarcode(barcode) {
    let temp = barcode.slice(2, barcode.length - 2);
    return temp.split(' ');
}

function getPostCode(formatedBarCodes, barcodes) {
    let postCode = '';
    formatedBarCodes.reduce(function (cur, newValue) {
        let exist = cur.find(function (ele) {
            return ele === newValue;
        });
        if (exist) {
            postCode += barcodes.indexOf(newValue);
        }
        return cur;
    }, formatedBarCodes);
    return Object.assign({}, {postCode: postCode.slice(0, postCode.length - 1)}, {cd: postCode[postCode.length - 1]});
}

function isLegalCd(postCodeAndCd) {
    let postcode = postCodeAndCd.postCode.split('');
    let temp = postcode.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, postCodeAndCd.cd);
    return temp % 10 === 0;
}

class BarcodeTransformer {
    barcodeToPostCode(barcode) {
        let output = '';
        if (isLegalBarcode(barcode)) {
            let barcodes = loadBars();
            let formatedBarcode = formatBarcode(barcode);
            let postcodeAndCd = getPostCode(formatedBarcode, barcodes);
            if (isLegalCd(postcodeAndCd) && isLegalLength(formatedBarcode)) {
                if (postcodeAndCd.postCode.length > 5) {
                    output = postcodeAndCd.postCode.slice(0, 5) + '-' + postcodeAndCd.postCode.slice(5, 9);
                    return {error: '', data: output};
                } else {
                    return {error: '', data: postcodeAndCd.postCode}
                }
            }
        }
        return {error: '您输入的格式不正确', data: ''};
    }
}

module.exports = new BarcodeTransformer();