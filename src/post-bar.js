/***
 * Created by shiyue on 16-7-28.
 */
'use strict';
let table = ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
//条码转编码
function isLegalZipcode(zipcode) {
    return (zipcode.length === 5 || zipcode.length === 9 || zipcode.length === 10);
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

    return '| ' + arr.map((item)=>table[item]).join('') + ' |';

}

function zipcodeTraBarcode(zipcode) {
    if (isLegalZipcode(zipcode)) {
        return getBarcode(getCheckcode(zipcode));
    } else {
        return 'ERR:the input is illegal!V_V';
    }
}
//noinspection JSUnresolvedVariable
module.exports = {
    isLegalZipcode: isLegalZipcode,
    getCheckcode: getCheckcode,
    getBarcode: getBarcode,
    zipcodeTraBarcode: zipcodeTraBarcode
};
