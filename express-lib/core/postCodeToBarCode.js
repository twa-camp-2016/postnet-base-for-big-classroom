/**
 * Created by zhangyiru on 16-8-1.
 */
"use strict"
class ToBarCode {
    zipCodeToBarCode(zipCode) {
        if (!checkZip(zipCode)) {
            return undefined;
        }
        let zips = deleteSymbol(zipCode);
        let list = loadList();
        let zipCodes = addDigit(zips);
        let bar = getBar(list, zipCodes);
        return getBarCode(bar);
    };
}

function checkLegalSymbol(zipCode) {
    let zipCodes = zipCode.split("");
    let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "-"];
    return !zipCodes.some(code=> {

        return arr.indexOf(code) === -1;
    });
}

function checkZipCodeLength(zipCode) {
    return (zipCode.length === 5 || zipCode.length === 9 || zipCode.length === 10);
}

function checkZip(zipCode) {
    return checkLegalSymbol(zipCode) && checkZipCodeLength(zipCode);
}

function loadList() {
    return [
        {number: '1', symbol: ":::||"},
        {number: '2', symbol: "::|:|"},
        {number: '3', symbol: "::||:"},
        {number: '4', symbol: ":|::|"},
        {number: '5', symbol: ":|:|:"},
        {number: '6', symbol: ":||::"},
        {number: '7', symbol: "|:::|"},
        {number: '8', symbol: "|::|:"},
        {number: '9', symbol: "|:|::"},
        {number: '0', symbol: "||:::"}
    ];
}

function deleteSymbol(zipCode) {
    let arr = zipCode.split("");
    return arr.filter(item=> {
        return item != "-";
    });
}

function addDigit(zips) {
    let sum = zips.reduce((cur, item)=> {
        return parseInt(cur) + parseInt(item);
    });
    let a = (10 - (sum % 10)) % 10;
    zips.push(a.toString());
    return zips;
}

function getBar(list, zipCodes) {
    return zipCodes.map(zip=> {
        return zip = list.find(item=>(item.number === zip)).symbol + " ";
    });
}

function getBarCode(bar) {
    let string = bar.reduce((cur, item)=> {
        return cur + item;
    });
    return '| ' + string + '|';
}

module.exports = ToBarCode;