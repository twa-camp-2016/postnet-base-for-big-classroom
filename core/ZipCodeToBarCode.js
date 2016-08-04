/**
 * Created by lucky on 16-8-1.
 */
//邮编->条形码
function checkBit(zipCodes) {
    return zipCodes.length === 5 || zipCodes.length === 9 || zipCodes.length === 10;
}

function isInvalidZipCodes(zipCodes) {
    let result = zipCodes.split('');
    return result.every(function (element) {
        return !(isNaN(element) && element !== '-');
    });
}

function getCodeLists() {
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}

function formatCodes(zipCodes) {
    let modifiedCodes = zipCodes.split('-');
    return modifiedCodes.reduce(function (pre, cur) {
        return pre.toString().concat(cur.toString());
    });
}

function calculateCd(modifiedCodes) {
    let array = modifiedCodes.split('');
    let result = array.reduce(function (pre, cur) {
        return parseInt(pre) + parseInt(cur);
    });
    return result % 10 === 0 ? (result % 10).toString() : (10 - result % 10).toString();
}

function connectCodes(modifiedCodes, cd) {
    return modifiedCodes.concat(cd);
}

function matchBarCodes(newZipCodes, codeList) {
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

function addBarFrame(newBarCodes) {
    return '| '.concat(newBarCodes).concat(' |');
}
class ZipCodeToBarcode {
    covertToBarcode(zipCodes) {
        if (!(checkBit(zipCodes) && isInvalidZipCodes(zipCodes))) {
            return {
                error: "input wrong!!",
                barcode: undefined
            }
        }
        let codeList = getCodeLists();
        let modifiedCodes = formatCodes(zipCodes);
        let cd = calculateCd(modifiedCodes);
        let newZipCodes = connectCodes(modifiedCodes, cd);
        let newBarCodes = matchBarCodes(newZipCodes, codeList);
        return {
            error: undefined,
            barcode: addBarFrame(newBarCodes)
        };
    }
}

module.exports =ZipCodeToBarcode;