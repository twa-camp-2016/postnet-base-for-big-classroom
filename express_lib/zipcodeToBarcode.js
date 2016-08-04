/**
 * Created by wangqi on 16-8-2.
 */
'use strict';
function isValidZipCodeLength(zipcode) {
    return zipcode.length === 5 || zipcode.length === 10 || zipcode.length === 9;
}
function isValidZipCodeSymbol(zipcode) {
    let zipcodes = zipcode.split("");
    let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-"];
    return !zipcodes.some(function (code) {
        return arr.indexOf(code) === -1;
    });
}
function isValid_Location(zipcode) {
    return zipcode.length === 10 ? zipcode.substring(5, 6) === '-' : true;
}
function isValidZipCode(zipcode) {

    let result ;
    if (!isValid_Location(zipcode)){
        result = {success:false,data : "- location error"}
    }
    else if (!isValidZipCodeLength(zipcode)){
        result = {success:false,data : "length is illegal"}

    }
    else if (!isValidZipCodeSymbol(zipcode)){
        result = {success:false,data : "containing illegal symbol"}
    }
    else{
        result = {success:true};
    }
    return result;
}
function toTransformStr(zipcode) {
    return zipcode.split("").filter(function (object) {
        return object != "-";
    });
}
function calculateCheckDigit(zipcodeStr) {
    let sum = zipcodeStr.reduce(function (str1, str2) {
        return parseInt(str1) + parseInt(str2);
    });
    let checkcode = (10 - (sum % 10)) === 0 ? "0" : 10 - (sum % 10);
    zipcodeStr.push(checkcode.toString());
    return zipcodeStr;
}
function getReferenceList() {
    return [
        {zipcode: "1", barcode: ":::||"},
        {zipcode: "2", barcode: "::|:|"},
        {zipcode: "3", barcode: "::||:"},
        {zipcode: "4", barcode: ":|::|"},
        {zipcode: "5", barcode: ":|:|:"},
        {zipcode: "6", barcode: ":||::"},
        {zipcode: "7", barcode: "|:::|"},
        {zipcode: "8", barcode: "|::|:"},
        {zipcode: "9", barcode: "|:|::"},
        {zipcode: "0", barcode: "||:::"}
    ];
}
function getBarCodeArr(zipcodeAndCheckDigit, referedLists) {
    return zipcodeAndCheckDigit.map(function (object) {
        let barcodeList = referedLists.find(function (list) {
            return list.zipcode === object;
        });
        return object = barcodeList.barcode + " ";
    });
}
function formatedBarCodes(barcodes) {
    let barcodeStr = barcodes.reduce(function (initial, object) {
        return initial + object;
    });
    return "| " + barcodeStr + "|";
}
class Zipcode {
    transformToBarCode(zipcode) {

        let validZipCode = isValidZipCode(zipcode);
        if (!validZipCode.success)
            return validZipCode;

        let zipcodeStr = toTransformStr(zipcode);
        let zipcodeAndCheckDigit = calculateCheckDigit(zipcodeStr);
        let referedLists = getReferenceList();
        let barcodes = getBarCodeArr(zipcodeAndCheckDigit, referedLists);

        return {success: true, data: formatedBarCodes(barcodes)};
    }
}
module.exports = Zipcode;