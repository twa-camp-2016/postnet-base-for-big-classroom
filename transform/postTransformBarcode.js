'use strict';

class postToBarcode {
    constructor() {

    }
    isInvaliDigit(inputPost) {
        return /^\d{5}$|^\d{9}$|^\d{5}-\d{4}$/.test(inputPost);
    }

    loadAllItems() {
        return ['||:::', ':::||',
            '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
    }

    divideArray(inputPost) {
        let temp = inputPost.split('');
        let result = [];
        let removed = temp.splice(5, 1);
        return temp.map(function (te) {
            return parseInt(te);
        });
    }


    computeCD(numberArray) {
        let sum = 0;
        let cd = 0;
        sum = numberArray.reduce(function (input, input1) {
            return input + input1;
        })
        if (sum % 10 === 0) {
            cd = 0;
        }
        else {
            cd = 10 - sum % 10;
        }
        numberArray.push(cd);
        return numberArray;
    }


    matchBarcode(numberArrayCD, items) {
        let result = [];
        return numberArrayCD.map(function (item) {
            return items[item];
        });
    }


    formattedBarcode(stringArray) {
        let result = '|';
        let resul = stringArray.reduce(function (str1, str2) {
            return str1 + str2;
        })
        result += resul;
        result += '|';
        return result;
    }


    postTransformBarcode(inputPost) {
        let info = this.isInvaliDigit(inputPost);
        if (info === false) {
            return {error: 'the input is error', data: ''}.error;
        }
        let numberArray = this.divideArray(inputPost);
        let numberArrayCD = this.computeCD(numberArray);
        let itemsArray = this.loadAllItems();
        let stringArray = this.matchBarcode(numberArrayCD, itemsArray);
        let result = this.formattedBarcode(stringArray);
        return {error: '', data: result}.data;
    }
}
module.exports = postToBarcode;