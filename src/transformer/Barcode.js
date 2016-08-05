/**
 * Created by shiyue on 16-7-28.
 */
'use strict';
function loadTable(){
    //noinspection BadExpressionStatementJS
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}

function isLegalBarcode(barcode) {
    let arr = [];
    let barcodeArr = barcode.split("");
    let includedOtherChar = barcodeArr.find((item)=>item !== '|' && item !== ':' && item !== ' ');
    if (includedOtherChar) {
        return false;
    } else {
        if (barcode.startsWith('| ') && barcode.endsWith(' |')) {
            arr = barcode.split(' ').slice(1, arr.length - 1);
            return !arr.find((item)=>item.length !== 5);
        } else {
            return false;
        }
    }
}

function formatBarcode(barcode) {
    let arr = barcode.split(' ');
    return arr.slice(1, arr.length - 1);
}

function checkCheckcode(barcodeArr) {
    let zipcodeArr = barcodeArr.map((item)=>loadTable().indexOf(item));
    let sum = zipcodeArr.reduce((pre, cur)=>pre + cur);
    return !(sum % 10);
}

function getZipcode(barcode) {
    let arr = barcode.map((item)=>loadTable().indexOf(item));
    let newArr = arr.slice(0, arr.length - 1);
    newArr.splice(5, 0, '-');
    return newArr.join('').toLocaleString() + '\ncd:' + arr.pop();
}
//编码转条码
class Barcode {
    barcodeTraZipcode(barcode) {
        let legal = isLegalBarcode(barcode);
        if (legal) {
            let formatedBarcode = formatBarcode(barcode);
            let checked = checkCheckcode(formatedBarcode);
            if (checked) {
                return getZipcode(formatedBarcode);
            }
            else {
                return "ERR:checkcode is false!V_V"
            }
        }
        else {
            return 'ERR:the input is illegal!V_V';
        }
    }
}

//noinspection JSUnresolvedVariable
module.exports = Barcode;
