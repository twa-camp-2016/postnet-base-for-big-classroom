/**
 * Created by zhangyiru on 16-8-1.
 */
"use strict"
class ToPostCode {
    barCodeToZipCode(barcode) {
        let format = judgeIfLegal(barcode);
        if (!format) {
            return undefined
        }
        let barcodes = splBarCode(barcode);
        let clickList = getClickList();
        let zipcodes = chargeType(barcodes, clickList);
        let bool = checkDigit(zipcodes);
        return chargeZipCode(zipcodes, bool);
    }
}

function judgeIfLegal(barcode) {
    return checkSymbol(barcode) && checkFrame(barcode) && checkBarCodeLength(barcode);
}

function checkSymbol(barcode) {
    let barcodes = barcode.split("", barcode.length);
    let arr = [":", "|", " "];
    return !barcodes.some(code=> {
        return arr.indexOf(code) === -1;
    })
}

function checkFrame(barcode) {
    return barcode.startsWith("| ") && barcode.endsWith(" |");
}

function checkBarCodeLength(barcode) {
    let arr = barcode.split(" ");
    let brr = arr.splice(1, arr.length - 2);
    return !brr.some(item=> {
        return item.length !== 5;
    })
}

function getClickList() {
    return [
        {number: 1, symbol: ":::||"},
        {number: 2, symbol: "::|:|"},
        {number: 3, symbol: "::||:"},
        {number: 4, symbol: ":|::|"},
        {number: 5, symbol: ":|:|:"},
        {number: 6, symbol: ":||::"},
        {number: 7, symbol: "|:::|"},
        {number: 8, symbol: "|::|:"},
        {number: 9, symbol: "|:|::"},
        {number: 0, symbol: "||:::"}
    ]
}

function splBarCode(barcode) {
    let arr = barcode.split(" ");
    return arr.splice(1, arr.length - 2);
}

function chargeType(barcodes, clickList) {
    return barcodes.map(bar=> {
        return bar = clickList.find(cli=> (bar === cli.symbol)).number;
    });
}

function checkDigit(zipCodes) {
    let sum = zipCodes.reduce((cur, code)=> {
        return cur + code;
    });
    return sum % 10 === 0;
}

function chargeZipCode(zipCodes, bool) {
    let string = "";
    if (!bool) {
        return undefined;
    }
    if (zipCodes.length === 6) {
        zipCodes.splice(zipCodes.length - 1, zipCodes.length - 1);
        string = zipCodes.reduce((cur, code)=> {
            return cur + code.toString();
        })
    } else {
        zipCodes.splice(zipCodes.length - 1, zipCodes.length - 1);
        let str = zipCodes.reduce((cur, code)=> {
            return cur + code.toString();
        });
        string = str.slice(0, 5) + "-" + str.slice(5);
    }
    return string;
}
module.exports = ToPostCode;