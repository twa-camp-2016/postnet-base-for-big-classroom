/**
 * Created by wt on 16-7-31.
 */
/*global module*/
class ZIPToBarcode {
    static changeToBarcode(ZIP) {
        if (!this.isLegalZIP(ZIP)) {
            return undefined;
        }
        let ZIPCode = this.formatZIP(ZIP);
        let checkCode = this.calculateCheckCode(ZIPCode);
        let allZIP = this.connectCheckCodeToZIP(ZIPCode, checkCode);
        let barcode = this.getBarcode(allZIP);
        return this.formatBarcode(barcode);
    }

    static isLegalZIP(input) {
        return !(input.length !== 5 &&
        input.length !== 9 &&
        input.length !== 10);
    }

    static formatZIP(input) {
        let tempZIP = input.split('-');
        let result = tempZIP.map(function (tags) {
            return tags.split('');
        });
        return result.reduce(function (pre, cur) {
            return pre.concat(cur);
        }).map(function (tags) {
            return parseInt(tags);
        });
    }

    static loadZIPDenoting() {
        return ['||:::', ':::||', '::|:|',
            '::||:', ':|::|', ':|:|:',
            ':||::', '|:::|', '|::|:',
            '|:|::'];
    }

    static calculateCheckCode(ZIPCode) {
        let temp = ZIPCode.reduce(function (pre, cur) {
            return pre + cur;
        });
        return temp % 10 === 0 ? 0 : 10 - temp % 10;
    }

    static connectCheckCodeToZIP(ZIPCode, checkCode) {
        ZIPCode.push(checkCode);
        return ZIPCode;
    }


    static getBarcode(ZIPCode) {
        let ZIP = this.loadZIPDenoting();
        return ZIPCode.map(function (tag) {
            return ZIP[tag];
        });
    }

    static formatBarcode(barcode) {
        let allBarcode = barcode.map(function (tags) {
            return tags + ' ';
        });
        let result = allBarcode.reduce(function (pre, cur) {
            return pre.concat(cur);
        });
        return '| ' + result + '|';
    }

}
module.exports = ZIPToBarcode;






















