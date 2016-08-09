//条形码->邮编
/*global module*/
/**
 * @return {boolean}
 */
function IsLegal(barCodes) {
    let result = Array.from(barCodes).filter(function (code) {
        return code === ' ' || code === '|' || code === ':';
    });
    return result.length === barCodes.length;
}

function isHaveBarFrame(barCodes) {
    let m = barCodes.length;
    let firstFrame = barCodes.slice(0, 2);
    let endFrame = barCodes.slice(m - 2, m);
    return !!(firstFrame[0] === '|' && firstFrame[1] === ' ' && endFrame[0] === ' ' && endFrame[1] === '|');
}

function getCodeList() {
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}

function deleteFrame(barCodes) {
    return barCodes.substr(2, barCodes.length - 4);
}

function formatBarCodes(barcodes) {
    return barcodes.split(' ');
}

function filterSpace(barCodes) {
    return barCodes.filter(function (codes) {
        return codes.length === 5;
    });
}

function matchZipCodes(codeList, formatCodes) {
    let allCodes = formatCodes.map(function (code) {
        return codeList.indexOf(code);
    });
    return allCodes.reduce(function (pre, cur) {
        return pre.toString().concat(cur.toString());
    });
}

function checkCd(allCodes) {
    let array = allCodes.split('');
    let result = array.reduce(function (pre, cur) {
        return parseInt(pre) + parseInt(cur);
    });
    return result % 10 === 0;
}

function deleteCheckDigit(allCodes) {
    return allCodes.substr(0, allCodes.length - 1);
}

function finalFormat(zipCodes) {
    if (zipCodes.length == 9) {
        return zipCodes.substr(0, zipCodes.length - 4).concat('-').concat(zipCodes.substr(5, zipCodes.length - 5));
    }
    else
        return zipCodes;
}

class BarcodeToZipCode {
    covertToZipCodes(barCodes) {
        if (!(IsLegal(barCodes) && isHaveBarFrame(barCodes))) {
            return {
                error: 'input wrong!!',
                data: undefined
            }
        }

        let codeList = getCodeList();
        let modifiedBarCodes = deleteFrame(barCodes);
        let formatCodes = formatBarCodes(modifiedBarCodes);
        let noSpaceCodes = filterSpace(formatCodes);
        let allCodes = matchZipCodes(codeList, noSpaceCodes);
        let zipCodes;
        if (!checkCd(allCodes)) {
            return {
                error: "the check digit is wrong!!!",
                data: undefined
            }
        } else {
            zipCodes = deleteCheckDigit(allCodes);
            return {
                error: undefined,
                data: finalFormat(zipCodes)
            };
        }
    }
}

module.exports = BarcodeToZipCode;