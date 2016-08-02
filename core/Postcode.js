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
//判断邮编是否合法
function isLegalPostcode(postcode) {
    let postcodeLength = (postcode.length === 5 || postcode.length === 9 || postcode.length === 10);
    let postcodeType = Array.from(postcode).every(function (element) {
        return ( !isNaN(parseInt(element))) || element === "-";
    });
    return postcodeLength && postcodeType;
}
//格式化邮编(去掉“－”)
function formatPostcode(postcode) {
    let formattedPostcode = '';
    if (postcode.indexOf('-')) {
        formattedPostcode = postcode.replace('-', '');
    }
    return formattedPostcode;
}
//计算校验码
function calculateCheckDigit(formattedPostcode) {
    let sum = Array.from(formattedPostcode).reduce(function (first, second) {
        return parseInt(first) + parseInt(second);
    }, 0);
    return sum % 10 === 0 ? 0 : 10 - sum % 10;
}

//匹配
function matchBarcode(formattedPostcode, allRegulars, checkDigit) {
    let finalBarcode = Array.from((formattedPostcode + checkDigit)).map(function (info) {
        return allRegulars[parseInt(info)];
    });
    finalBarcode = finalBarcode.join("");
    return finalBarcode;
}
//输出
function printBarcode(finalBarcode) {
    return "|" + finalBarcode + "|";
}
class Postcode{
    transform(postcode){
        let isLegal = isLegalPostcode(postcode);
        if (!isLegal) {return undefined;}
        let formattedPostcode = formatPostcode(postcode);
        let checkDigit = calculateCheckDigit(formattedPostcode);
        let finalBarcode = matchBarcode(formattedPostcode, allRegulars, checkDigit);
        return printBarcode(finalBarcode);
    }
}
module.exports = Postcode;
