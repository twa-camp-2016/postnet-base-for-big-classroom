'use strict';
function isValidDigit(example) {
    let pattern = /^[\|: ]+$/;
    return example.match(pattern) !== null;
}


function matchFiveBarcode(example) {
    let temp = example.substring(2, example.length - 2);
    let temps = temp.split(' ');
    return temps.find(function (item) {
        return item.length === 5;
    }) === undefined ? false : true;
}


function isHaveFrame(example) {
    let str1 = example.substring(0, 2);
    let str2 = example.substring(example.length - 2);
    return str1 === '| ' && str2 === ' |';
}


function isValidLength(example) {
    let temp = example.split(' ');
    if (temp.length === 8 || temp.length === 12)
        return true;
    else
        return false;
}


function divideBarcode(example) {
    let result = [];
    let temp = example.substring(2, example.length - 2);
    let temps = temp.split(' ');
    return temps;
}


function loadAllItems() {
    return ['||:::', ':::||',
        '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];

}


function computePost(exampleString, items) {
    let result = [];
    result = exampleString.map(function (example) {
        return items.indexOf(example);
    });
    if (result.indexOf(-1) !== -1) {
        return 'the each number > 9 or the exampleString is not correct';
    }
    else {
        return result;
    }
}


function checkCD(exampleNumber) {
    exampleNumber.pop();
    let sum = 0;
    sum = exampleNumber.reduce(function (a, b) {
        return a + b;
    });
    if (sum % 10 === 0) {
        exampleNumber.push(0);
        return exampleNumber;
    }
    else {
        exampleNumber.push(10 - sum % 10);
    }
    return exampleNumber;
}


function formattedPost(exampleNumber) {
    if (exampleNumber.length === 10) {
        exampleNumber.splice(5, 0, '-');
    }
    let str = exampleNumber.join('');
    let result = str.substring(0, str.length - 1) + '\ncd is:' + str.substring(str.length - 1);
    return result;

}



class Barcode {
    constructor() {

    }



    BarcodeTransformPost(example) {
        let info = isValidDigit(example);
        let info1 = matchFiveBarcode(example);
        let info2 = isHaveFrame(example);
        let info3 = isValidLength(example);
        let resulted = {};
        if (info === false) {
            resulted = {error: `the input is have not correct input`, data: ``};
            return resulted.error;
        }
        else if (info1 === false) {
            resulted = {error: `the barcode is not five char`, data: ``};
            return resulted.error;
        }
        else if (info2 === false) {
            resulted = {error: `the barcode have not frame`, data: ``};
            return resulted.error;
        }
        else if (info3 === false) {
            resulted = {error: `the barcode length is not valid`, data: ``};
            return resulted.error;
        }

        let exampleString = divideBarcode(example)
        let items = loadAllItems();
        let exampleNumber = computePost(exampleString, items);
        let str = 'the each number > 9 or the exampleString is not correct';
        if (exampleNumber === str) {
            resulted = {error: `the each number > 9 or the exampleString is not correct`, data: ``};
            return resulted.error;
        }
        let exampleNumbercd = checkCD(exampleNumber);
        resulted = {error: ``, data: formattedPost(exampleNumbercd)};
        return resulted.data;
    }
}
module.exports = Barcode;