"use strict"
const response=require('./response');
class zipCodeToBarcode{
    execute(input) {
        return this.changeToBarcode(input);
    }
    
     isLegalZipCode(zipCode) {
    let code1 = /^\d{5}$/;
    let code2 = /^\d{9}$/;
    let code3 = /^\d{5}[-]\d{4}$/;

    return (code1.test(zipCode) || code2.test(zipCode) || code3.test(zipCode));
    }

    loadAllBarcode() {
        return [
            '||:::',
            ':::||',
            '::|:|',
            '::||:',
            ':|::|',
            ':|:|:',
            ':||::',
            '|:::|',
            '|::|:',
            '|:|::'
        ];
    }
    
    calculateCheckDigit(zipCode) {
    let code = /^\d{5}[-]\d{4}$/;
    let zip_code = code.test(zipCode) ? zipCode.replace("-", "") : zipCode;
    let temp = zip_code.split("");
    let sum = temp.reduce(function (first, second) {
        return parseInt(first) + parseInt(second);
    }, 0);

    return (10 - sum % 10) % 10;
    }

     getBarcode(zipCode, checkDigit, allBarcode) {
    let mergedZipCode = zipCode.concat(checkDigit).split("");
    let temp = mergedZipCode.map(function (item) {
        return allBarcode[parseInt(item)];
    });

    return "|" + temp.join("") + "|";
    }   

     changeToBarcode(zipCode) {
    let result = this.isLegalZipCode(zipCode);
    let allBarcode = this.loadAllBarcode();
    if (!result) {
        return undefined;
    }
    let checkDigit = this.calculateCheckDigit(zipCode);
    let barcode = this.getBarcode(zipCode, checkDigit, allBarcode);
         return (new response(barcode));
    }
}

module.exports =zipCodeToBarcode;