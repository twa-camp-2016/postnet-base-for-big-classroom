/**
 * Created by fcc on 16-7-31.
 */
let allCodes = require('./allCodes.js');
class postcodeToBarcode {

    judge1(input) {
        let result;
        if (/^\d{5}(-?\d{4})?$/.test(input)) {
            return result = input;
        } else {
            return result = 'wrong input';
        }
    }

    splitNums(input) {
        let splitTemp = input.split('');
        let split = splitTemp.filter(info=>info !== "-");
        return split;
    }

    getCheckCodes(splitNum) {
        let checkCodes = splitNum.map(function (num) {
            return parseInt(num);
        });
        let sum = checkCodes.reduce(function (a, b) {
            return a + b;
        });
        if (sum % 10 !== 0) {
            checkCodes.push(10 - sum % 10);
        } else {
            checkCodes.push(0);
        }
        return checkCodes;
    }

    matchInput(checkCodes, allCodes) {
        let codes = [];
        checkCodes.filter(function (code) {
            for (let i = 0; i < allCodes.length; i++) {
                if (code === i) {
                    codes.push(allCodes[i]);
                }
            }
        });
        return codes;
    }

    getStr(codes) {
        codes = codes.join(' ');
        return '| ' + codes + ' |';
    }
}

module.exports = postcodeToBarcode;