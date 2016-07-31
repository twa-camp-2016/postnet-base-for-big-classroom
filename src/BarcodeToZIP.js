/**
 * Created by wt on 16-7-31.
 */
/*global module*/

class BarcodeToZIP {
    static  changeToZIP(input) {
        let temp = this.isLegalBarcode(input);
        if (temp) {
            let ZIP = this.formatBarcodes(input);
            let allZIPCode = this.getAllZIPCode(ZIP);
            let checkCode = this.getCheckCode(allZIPCode);
            if (!this.isLegalCheckCode(allZIPCode, checkCode)) {
                return undefined;
            }
            return this.formatZIPCode(allZIPCode);
        }
        return undefined;
    }

    static isLegalBarcode(input) {
        if (input.length < 4) {
            return undefined;
        }
        return (input[0] === '|' &&
        input[1] === ' ' &&
        input[input.length - 2] === ' ' &&
        input[input.length - 1] === '|');

    }

    static formatBarcodes(input) {
        let temp = input.split(' ');
        return temp.filter(function (tags) {
            return tags.length > 1;
        })
    }

    static loadZIPDenoting() {
        return ['||:::', ':::||', '::|:|',
            '::||:', ':|::|', ':|:|:',
            ':||::', '|:::|', '|::|:',
            '|:|::'];
    }

    static  getAllZIPCode(input) {
        let ZIP = this.loadZIPDenoting();
        return input.map(function (tags) {
            return ZIP.indexOf(tags);
        });
    }

    static getCheckCode(input) {
        return parseInt(input.pop());
    }

    static isLegalCheckCode(input, checkCode) {
        let temp = input.reduce(function (pre, cur) {
            return pre + cur;
        });
        return (temp + checkCode) % 10 === 0;
    }

    static  formatZIPCode(input) {
        let temp = input.reduce(function (pre, cur) {
            return pre.toString().concat(cur.toString());
        });
        if (temp.length === 9) {
            let result1 = temp.substring(0, 5);
            let result2 = temp.substring(5);
            return result1.concat('-', result2);
        }
        return temp;
    }
}
module.exports = BarcodeToZIP;