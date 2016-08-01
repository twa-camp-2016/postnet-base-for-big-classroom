/**
 * Created by wt on 16-7-31.
 */
/*global module*/
function isLegalZIP(input) {
    return !(input.length !== 5 &&
    input.length !== 9 &&
    input.length !== 10);
}

function formatZIP(input) {
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

function loadZIPDenoting() {
    return ['||:::', ':::||', '::|:|',
        '::||:', ':|::|', ':|:|:',
        ':||::', '|:::|', '|::|:',
        '|:|::'];
}

function calculateCheckCode(ZIPCode) {
    let temp = ZIPCode.reduce(function (pre, cur) {
        return pre + cur;
    });
    return temp % 10 === 0 ? 0 : 10 - temp % 10;
}

function connectCheckCodeToZIP(ZIPCode, checkCode) {
    ZIPCode.push(checkCode);
    return ZIPCode;
}


function getBarcode(ZIPCode, ZIP) {
    return ZIPCode.map(function (tag) {
        return ZIP[tag];
    });
}

function formatBarcode(barcode) {
    let allBarcode = barcode.map(function (tags) {
        return tags + ' ';
    });
    let result = allBarcode.reduce(function (pre, cur) {
        return pre.concat(cur);
    });
    return '| ' + result + '|';
}

class ZIPToBarcode {

    changeToBarcode(barcode) {
        if (!isLegalZIP(barcode)) {
            return {
                error: 'input error',
                data: undefined
            }
        }
        let ZIPCode = formatZIP(barcode);
        let checkCode = calculateCheckCode(ZIPCode);
        let allZIP = connectCheckCodeToZIP(ZIPCode, checkCode);
        let ZIP = loadZIPDenoting();
        let barcodes = getBarcode(allZIP, ZIP);
        return {
            error: undefined,
            data: formatBarcode(barcodes)
        }
    }
}
module.exports = ZIPToBarcode;






















