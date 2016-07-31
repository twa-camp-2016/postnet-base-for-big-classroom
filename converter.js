'use strict';

/**
 * Created by zhangyiru on 16-7-28.
 */
/*global module*/
class postToBar {

    static zipCodeToBarCode(zipCode) {
        if (!this.checkZip(zipCode)) {
            return undefined;
        }
        let zips = this.deleteSymbol(zipCode);
        let list = this.loadList();
        let zipCodes = this.addDigit(zips);
        let bar = this.getBar(list, zipCodes);
        return this.getBarCode(bar);
    }

    static checkLegalSymbol(zipCode) {
        let zipCodes = zipCode.split("");
        let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "-"];
        return !zipCodes.some( code=> {

            return arr.indexOf(code) === -1;
        });
    }



   static checkZipCodeLength(zipCode) {
        return (zipCode.length === 5 || zipCode.length === 9 || zipCode.length === 10);
    }



    static checkZip(zipCode) {
        return checkLegalSymbol(zipCode) && checkZipCodeLength(zipCode);
    }



    static loadList() {
        return [
            {number: '1', symbol: ":::||"},
            {number: '2', symbol: "::|:|"},
            {number: '3', symbol: "::||:"},
            {number: '4', symbol: ":|::|"},
            {number: '5', symbol: ":|:|:"},
            {number: '6', symbol: ":||::"},
            {number: '7', symbol: "|:::|"},
            {number: '8', symbol: "|::|:"},
            {number: '9', symbol: "|:|::"},
            {number: '0', symbol: "||:::"}
        ];
    }



    static deleteSymbol(zipCode) {
        let arr = zipCode.split("");
        return arr.filter(item=> {
            return item != "-";
        });
    }



    static addDigit(zips) {
        let sum = zips.reduce((cur, item)=> {
            return parseInt(cur) + parseInt(item);
        });
        let a = (10 - (sum % 10)) % 10;
        zips.push(a.toString());
        return zips;
    }



    static getBar(list, zipCodes) {
        return zipCodes.map(zip=> {
            return zip = list.find(item=>(item.number === zip)).symbol + " ";
        });
    }



    static getBarCode(bar) {
        let string = bar.reduce((cur, item)=> {
            return cur + item;
        });
        return "| " + string + "|";
    }





}


class barToPost {

    static barCodeToZipCode(barcode) {
        let format = this.judgeIfLegal(barcode);
        if (!format) {
            return false;
        }
        let barcodes = this.splBarCode(barcode);
        let clickList = this.getClickList();
        let zipcodes = this.chargeType(barcodes, clickList);
        let bool = this.checkDigit(zipcodes);
        return this.chargeZipCode(zipcodes, bool);
    }


    static  judgeIfLegal(barcode) {
        return checkSymbol(barcode) && checkFrame(barcode) && checkBarCodeLength(barcode);
    }



    static  checkSymbol(barcode) {
        let barcodes = barcode.split("", barcode.length);
        let arr = [":", "|", " "];
        return !barcodes.some( code=> {
            return arr.indexOf(code) === -1;
        })
    }

    static checkFrame(barcode) {
        return barcode.startsWith("| ") && barcode.endsWith(" |");
    }

    static checkBarCodeLength(barcode) {
        let arr = barcode.split(" ");
        let brr = arr.splice(1, arr.length - 2);
        return !brr.some(item=> {
            return item.length !== 5;
        })
    }

    static getClickList() {
        return [
            {number: 1, symbol: ":::||"},
            {number: 2, symbol: "::|:|"},
            {number: 3, symbol: "::||:"},
            {number: 4, symbol: ":|::|"},
            {number: 5, symbol: ":|:|:"},
            {number: 6, symbol: ":||::"},
            {number: 7, symbol: "|:::|"},
            {number: 8, symbol: "|::|:"},
            {number: 9, symbol: "|:|::"},
            {number: 0, symbol: "||:::"}
        ]

    }

    static splBarCode(barcode) {

        let arr = barcode.split(" ");
        return arr.splice(1, arr.length - 2);

    }

    static chargeType(barcodes, clickList) {
        return barcodes.map(bar=> {
            return bar = clickList.find(cli => {
                bar === cli.symbol
            }).number;
        });
    }

    static checkDigit(zipCodes) {
        let sum = zipCodes.reduce((cur, code)=> {
            return cur + code;
        });
        return sum % 10 === 0;
    }

   static chargeZipCode(zipCodes, bool) {
        let string = "";
        if (!bool) {
            return undefined;
        }
        if (zipCodes.length === 6) {
            zipCodes.splice(zipCodes.length - 1, zipCodes.length - 1);
            string = zipCodes.reduce((cur, code)=> {
                return cur + code.toString();
            })
        } else {
            zipCodes.splice(zipCodes.length - 1, zipCodes.length - 1);
            let str = zipCodes.reduce((cur, code)=> {
                return cur + code.toString();
            });
            string = str.slice(0, 5) + "-" + str.slice(5);
        }
        return string;
    }

}

module.exports = {
    postToBar:postToBar,
    barToPost:barToPost
};