/**
 * Created by lucky on 16-7-28.
 */

//条形码->邮编
/*global module*/
class barcodeToZipCode {
    static covertToZipCodes(barCodes) {
        if (!(this.IsLegal(barCodes) && this.isHaveBarFrame(barCodes))) {
            return "Please check your  barCodes,your input wrong!!!!!";
        }
        let codeList = this.getCodeList();
        let modifiedBarCodes = this.deleteFrame(barCodes);
        let formatCodes = this.formatBarCodes(modifiedBarCodes);
        let noSpaceCodes = this.filterSpace(formatCodes);
        let allCodes = this.matchZipCodes(codeList, noSpaceCodes);
        let zipCodes;
        if (!this.checkCd(allCodes)) {
            return "the check digit is wrong!!!";
        } else {
            zipCodes = this.deleteCheckDigit(allCodes);
            return this.finalFormat(zipCodes);
        }
    }

    /**
     * @return {boolean}
     */
    static IsLegal(barCodes) {
        let result = Array.from(barCodes).filter(function (code) {
            return code === ' ' || code === '|' || code === ':';
        });
        return result.length === barCodes.length;
    }

    static isHaveBarFrame(barCodes) {
        let m = barCodes.length;
        let firstFrame = barCodes.slice(0, 2);
        let endFrame = barCodes.slice(m - 2, m);
        return !!(firstFrame[0] === '|' && firstFrame[1] === ' ' && endFrame[0] === ' ' && endFrame[1] === '|');
    }

    static getCodeList() {
        return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
    }

    static deleteFrame(barCodes) {
        return barCodes.substr(2, barCodes.length - 4);
    }

    static formatBarCodes(barcodes) {
        return barcodes.split(' ');
    }

    static filterSpace(barCodes) {
        return barCodes.filter(function (codes) {
            return codes.length === 5;
        });
    }

    static matchZipCodes(codeList, formatCodes) {
        let allCodes = formatCodes.map(function (code) {
            return codeList.indexOf(code);
        });
        return allCodes.reduce(function (pre, cur) {
            return pre.toString().concat(cur.toString());
        });
    }

    static checkCd(allCodes) {
        let array = allCodes.split('');
        let result = array.reduce(function (pre, cur) {
            return parseInt(pre) + parseInt(cur);
        });
        return result % 10 === 0;
    }

    static deleteCheckDigit(allCodes) {
        return allCodes.substr(0, allCodes.length - 1);
    }

    static finalFormat(zipCodes) {
        if (zipCodes.length == 9) {
            return zipCodes.substr(0, zipCodes.length - 4).concat('-').concat(zipCodes.substr(5, zipCodes.length - 5));
        }
        else
            return zipCodes;
    }

}
//邮编->条形码
class zipCodeToBarcode {
    static covertToBarcode(zipCodes) {
        if (!(this.checkBit(zipCodes) && this.isInvalidZipCodes(zipCodes))) {
            return "please check your zipCodes,the input wrong!!!!!";
        }
        let codeList = this.getCodeLists();
        let modifiedCodes = this.formatCodes(zipCodes);
        let cd = this.calculateCd(modifiedCodes);
        let newZipCodes = this.connectCodes(modifiedCodes, cd);
        let newBarCodes = this.matchBarCodes(newZipCodes, codeList);
        return this.addBarFrame(newBarCodes);
    }
        static checkBit(zipCodes){
            return zipCodes.length === 5 || zipCodes.length === 9 || zipCodes.length === 10;
        }

        static  isInvalidZipCodes(zipCodes) {
            let result = zipCodes.split('');
            return result.every(function (element) {
                return !(isNaN(element) && element !== '-');
            });
        }

        static  getCodeLists() {
            return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        }

       static  formatCodes(zipCodes) {
            let modifiedCodes = zipCodes.split('-');
            return modifiedCodes.reduce(function (pre, cur) {
                return pre.toString().concat(cur.toString());
            });
        }

        static  calculateCd(modifiedCodes) {
            let array = modifiedCodes.split('');
            let result = array.reduce(function (pre, cur) {
                return parseInt(pre) + parseInt(cur);
            });
            return result % 10 === 0 ? (result % 10).toString() : (10 - result % 10).toString();
        }

        static connectCodes(modifiedCodes, cd) {
            return modifiedCodes.concat(cd);
        }

        static matchBarCodes(newZipCodes, codeList) {
            let codes = newZipCodes.split('');
            let newZipCode = codes.map(function (code) {
                let code1 = parseInt(code);
                return codeList.find(function (code, index) {
                    if (code1 === index) {
                        return code;
                    }
                });
            });
            return newZipCode.reduce(function (pre, cur) {
                return pre.concat(cur);
            });
        }

        static addBarFrame(newBarCodes) {
            return '| '.concat(newBarCodes).concat(' |');
        }
}
module.exports = {
    test1: barcodeToZipCode,
    test2: zipCodeToBarcode
};