/**
 * Created by hxc on 16-7-28.
 */

function loadBars() {
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}

function isLegalPostCode(postcode) {
    return /^\d{5}$|^\d{9}$|^\d{5}-\d{4}$/.test(postcode);
}

function formatPostCode(postCode) {
    let temp = postCode.split('-');
    let result = temp[0] + (temp[1] || '');
    return result.split('').map(function (ele) {
        return parseInt(ele);
    });
}

function getCD(formatedPostCode) {
    let sum = 0, cd = 0;
    sum = formatedPostCode.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    });
    if (sum % 10 === 0) {
        return 0;
    }
    else {
        return 10 - sum % 10;
    }
}

function getBarCode(formatedPostCode, barcodes, cd) {
    return formatedPostCode.reduce(function (cur, newValue) {
            return cur += barcodes[newValue];
        }, '|') + barcodes[cd] + '|';
}

class PostTransformer {
    postToBarcode(postcode) {
        if (isLegalPostCode(postcode)) {
            let barcodes = loadBars();
            let formatedPostCode = formatPostCode(postcode);
            let cd = getCD(formatedPostCode);
            let barcode = getBarCode(formatedPostCode, barcodes, cd);
            let output = `${postcode}==${barcode}
cd is ${cd}`;
            return {error:'',data:output};
        }
        return {error:'您输入的邮编格式不正确，请重新输入',data:''};
    }
}

module.exports=new PostTransformer();