/**
 * Created by wangqi on 16-8-2.
 */
'use strict';
function isValidBarCodeFormat(barcodes) {
    return barcodes.startsWith("| ") && barcodes.endsWith(" |");
}
function isValidBarCodeContent(barcodes) {
    let barcodeContent = barcodes.slice(2, barcodes.length - 2);
    let barcodeArr = barcodeContent.split("");
    return !barcodeArr.some(function (object) {
        return ((object !== ":") && (object !== "|") && (object !== " "));

    })
}
function isValidBarCodeLength(barcodes) {
    let barcodeContent = barcodes.slice(2, barcodes.length - 2);
    let barcodeArr = barcodeContent.split(" ");
    return !(barcodeArr.some(function (object) {
        return object.length !== 5;
    }));
}
function isValidBarCode(barcodes) {
    let result;
    if(!isValidBarCodeContent(barcodes) ) {
        result = {success: false, data:"exist invalid symbol"}
    }
    else if(!isValidBarCodeFormat(barcodes)) {
        result = {success: false, data:"illegal format"}
    }
    else if (!isValidBarCodeLength(barcodes)) {
        result = {success: false, data:"invalid barcode length"}
    }
    else {
        result = {success: true}
    }
    return result;
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
function getZipCodeArr(barcodes, referedLists) {
    let barcodeString = barcodes.slice(2, barcodes.length - 2);
    let barcodesArr = barcodeString.split(" ");
    return barcodesArr.map(function (object) {
        let item = referedLists.find(function (list) {
            return object === list.barcode;
        });
        return object = item.zipcode;
    });
}
function isValidCheckDigit(zipcodeArr) {
    let sum = zipcodeArr.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    });
    return sum % 10 === 0;
}
function formatedZipCode(zipcodeArr, boolean) {
    if (!boolean) {
        return undefined;
    }
    let zipcode = zipcodeArr.slice(0, zipcodeArr.length - 1);
    if (zipcode.length === 5) {
        return zipcode.reduce(function (a, b) {
            return a + b;
        });
    }
    else if (zipcode.length === 9) {
        let zipcodeString = zipcode.reduce(function (a, b) {
            return a + b;
        });
        return zipcodeString.substring(0, 5) + "-" + zipcodeString.substring(5, zipcodeString.length);
    }
}
class Barcode {
    transformToZipCode(barcodes) {
        let format = isValidBarCode(barcodes);
        if (!format.success) {
            return format;
        }
        let referedLists = getReferenceList();
        let zipcodeArr = getZipCodeArr(barcodes, referedLists);
        let boolean = isValidCheckDigit(zipcodeArr);
        if(!boolean){
            return {success:false,data:"undefined"};
        }
        return {success:true,data:formatedZipCode(zipcodeArr, boolean)};
    }
}
module.exports = Barcode;

