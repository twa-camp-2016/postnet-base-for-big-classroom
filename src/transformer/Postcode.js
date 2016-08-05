/***
 * Created by shiyue on 16-7-28.
 */
'use strict';

function loadTable() {
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}

function loadTable() {
    //noinspection BadExpressionStatementJS
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}

function isLegalZipcode(zipcode) {
    let reg = /^\d{5}(-?\d{4})?$/;
    return (reg.test(zipcode)) ? true : false;
}

function getCheckcode(zipcode) {
    let zipArr = zipcode.split('-').join('').split('');
    let arr = zipArr.map((item)=>parseInt(item));
    let sum = arr.reduce((pre, cur)=>pre + cur);
    zipArr.push((10 - sum % 10) % 10);
    return zipArr.join('');
}

function getBarcode(zipcode) {
    let zipArr = zipcode.split('-').join('').split('');
    let arr = zipArr.map((item)=>parseInt(item));

    return '| ' + arr.map((item)=>loadTable()[item]).join('') + ' |';

}

//条码转编码
class Postcode {
    zipcodeTraBarcode(zipcode) {
        if (isLegalZipcode(zipcode)) {
            return getBarcode(getCheckcode(zipcode));
        } else {
            return 'ERR:the input is illegal!V_V';
        }
    }
}

//noinspection JSUnresolvedVariable
module.exports = Postcode;
