/**
 * Created by wt on 16-7-31.
 */
/*global module*/
function isLegalBarcode(input) {
    if (input.length < 4) {
        return undefined;
    }
    return (input[0] === '|' &&
    input[1] === ' ' &&
    input[input.length - 2] === ' ' &&
    input[input.length - 1] === '|');

}

function formatBarcodes(input) {
    let temp = input.split(' ');
    return temp.filter(function (tags) {
        return tags.length > 1;
    })
}

function loadZIPDenoting() {
    return ['||:::', ':::||', '::|:|',
        '::||:', ':|::|', ':|:|:',
        ':||::', '|:::|', '|::|:',
        '|:|::'];
}

function getAllZIPCode(input, ZIP) {
    return input.map(function (tags) {
        return ZIP.indexOf(tags);
    });
}

function getCheckCode(input) {
    return parseInt(input.pop());
}

function isLegalCheckCode(input, checkCode) {
    let temp = input.reduce(function (pre, cur) {
        return pre + cur;
    });
    return (temp + checkCode) % 10 === 0;
}

function formatZIPCode(input) {
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

class BarcodeToZIP {
    changeToZIP(input) {
        let temp = isLegalBarcode(input);
        if (temp) {
            let ZIP = formatBarcodes(input);
            let ZIPcode = loadZIPDenoting();
            let allZIPCode = getAllZIPCode(ZIP, ZIPcode);
            let checkCode = getCheckCode(allZIPCode);
            if (!isLegalCheckCode(allZIPCode, checkCode)) {
                return {
                    error: 'invalid check digit',
                    data: undefined
                }
            }
            return {
                error: undefined,
                data: formatZIPCode(allZIPCode)
            };
        }
        return {
            error: 'input error',
            data: undefined
        };
    }
}
module.exports = BarcodeToZIP;