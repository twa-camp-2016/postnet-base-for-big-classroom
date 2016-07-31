'use strict';
class toPostCode{
    transformToPostCode(barcode) {
        let digits = this.loadAllDigit();
        let flag = this.isValidBarcodeDigit(barcode);
        let flag1 = this.isHasFrame(barcode);
        let flag2 = this.isValidBarcodeLength(barcode);

        if(flag === false){
            return `error: 输入的条码不能有：和|以外的字符`;
        }

        if(flag1 === false){
            return `error: 输入的条码必须头部和尾部有| 和 |`;
        }

        if(flag2 === false){
            return `error: 输入的条码digit的数目必须是6或10`;
        }

        if (flag && flag1 && flag2) {
            let digitsArray = this.getDigitsArray(barcode);
            let postCodeArray = this.changePostCodeArray(digitsArray, digits);
            let codeArray = this.checkCD(postCodeArray);
            return this.getPostCode(codeArray);
        }
    }

     loadAllDigit() {
        return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
    }

     isValidBarcodeDigit(barcode) {
        return /^[\|: ]+$/.test(barcode);
    }

     isHasFrame(barcode) {
        return barcode.slice(0, 2) === "| " && barcode.slice(-2) === " |";
    }

     isValidBarcodeLength(barcode) {
        let array1 = barcode.slice(2, -2).split(" ");
        return array1.length === 6 || array1.length === 10;

    }

     getDigitsArray(barcode) {
        return barcode.slice(2, -2).split(' ');
    }


     changePostCodeArray(array, digits) {
        return array.map((item) => digits.indexOf(item));
    }


     checkCD(array) {
        let temp = array.reduce((a, b) => a + b);

        return temp % 10 === 0 ? array : 'error';
    }


     getPostCode(codeArray) {
        if (codeArray.length === 10) {
            codeArray.splice(5, 0, '-');
        }

        let postCode = codeArray.join('');
        let code = postCode.substring(0, postCode.length - 1);
        let cd = postCode.substr(postCode.length - 1, 1);
        return code + '\n' + 'cd is ' + cd;
    }
}
module.exports = toPostCode;