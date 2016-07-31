/*global module*/

//加载转换表
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
//主调
function main1(postcode) {
    let isLegal = isLegalPostcode(postcode);
    if (!isLegal) {return undefined;}
    let formattedPostcode = formatPostcode(postcode);
    let checkDigit = calculateCheckDigit(formattedPostcode);
    let finalBarcode = matchBarcode(formattedPostcode, allRegulars, checkDigit);
    return printBarcode(finalBarcode);
}


//判断条码是否合法
function isLegalBarcode(barcode) {
    //验证条码内容是否合法
    let barcodeType = Array.from(barcode).every(function (element) {
        return element === ":" || element === "|" || element === " ";
    });
    //验证条码框架是否合法
    let barcodeForm = barcode.length >= 4 && barcode.slice(0, 2) === "| " && barcode.slice(-3, -1);
    //验证连续的是否由5个字符组成
    let barcodeContinuity = barcode.slice(2, -2).split(" ").every(function (element) {
        return element.length === 5;
    });
    return barcodeType && barcodeForm && barcodeContinuity;

}
//格式化条码(去掉左右的“｜”,5个一分割，存入一个数组)
function formatBarcode(barcode) {
    return barcode.slice(2, -2).split(' ');
}
//匹配
function matchPostcode(formattedBarcode, allRegulars) {
    let finalPostcode = formattedBarcode.map(function (item) {
        return allRegulars.indexOf(item);
    });
    let lastElement = parseInt(finalPostcode.join("").slice(-1));
    let sum = finalPostcode.slice(0, finalPostcode.length-1).reduce(function (first, second) {
        return first + second;
    }, 0);
    return (10 - (sum % 10) === lastElement)?parseInt(finalPostcode.join("")):false;
}
//主调
function main2(barcode) {
    let isLegal = isLegalBarcode(barcode);
    if (!isLegal){return undefined;}
    let formattedBarcode = formatBarcode(barcode);
    return matchPostcode(formattedBarcode, allRegulars);
}

module.exports = {
    isLegalPostcode: isLegalPostcode,
    formatPostcode: formatPostcode,
    calculateCheckDigit: calculateCheckDigit,
    matchBarcode: matchBarcode,
    printBarcode: printBarcode,
    main1: main1,
    isLegalBarcode: isLegalBarcode,
    formatBarcode: formatBarcode,
    matchPostcode: matchPostcode,
    main2: main2,
};
