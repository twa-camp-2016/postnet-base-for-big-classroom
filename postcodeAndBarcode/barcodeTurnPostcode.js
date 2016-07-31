/**
 * Created by fcc on 16-7-31.
 */
let allCodes = require('./allCodes.js');
class barcodeToPostcode {

    isValue(codes) {
        let bool = true;
        for (let i of codes) {
            if (i !== '|' && i !== ' ' && i !== ':') {
                return bool = false;
            }
        }
        return bool;
    }

    hasFrame(codes) {
        let bool = false;
        let arr = codes.split('');
        if (arr[0] === '|' && arr[1] === ' ' && arr[arr.length - 1] === '|' && arr[arr.length - 2] === ' ') {
            bool = true;
        }
        return bool;
    }

    splitCodes(codes) {
        let temp = codes.split(' ');
        let splitCode = temp.slice(1, temp.length - 1);
        return splitCode;
    }


    matchNums(splitCode, allCodes) {
        let nums = [];
        splitCode.filter(function (code) {
            for (let i = 0; i < allCodes.length; i++) {
                if (code === allCodes[i]) {
                    nums.push(i);
                }
            }
        });
        return nums;
    }


    getInspectionCode(nums) {
        let num = nums.slice(0, nums.length - 1);
        return num;
    }

    getFinalNum(num) {
        num = num.join('');
        let str = num.substring(0, 5);
        let str1 = num.substring(5, num.length);
        if (num.length <= 5) {
            return str;
        } else {
            return str + '-' + str1;
        }
    }

}
module.exports = barcodeToPostcode;