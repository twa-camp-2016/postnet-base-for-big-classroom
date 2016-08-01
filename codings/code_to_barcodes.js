/*global module*/

function loadCodes() {
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}


function isInvalid(postcodes) {

    return postcodes.split('').every(temp=> {
        return !(isNaN(temp) && temp !== '-')
    });
}

function isTypeLegal(postcodes) {
    return postcodes.length === 5 || postcodes.length === 9 || postcodes.length === 10;
}

function convertFormat(postcodes) {
    if (postcodes.length === 10) {
        let index = postcodes.indexOf('-');
        return postcodes.slice(0, index)+(postcodes.slice(index + 1));
    }
    else {
        return postcodes;
    }
}

function calculateCheckDigit(postcode) {
    let sum = postcode.split('').reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    });
    return sum % 10 === 0 ? 0 : 10 - sum % 10;
}

function getAllPostcodes(postcode, checkDigit) {
    return postcode+(checkDigit.toString());
}

function matchPostcodeCodes(allBarcodes) {
    let codeList = loadCodes();
    let codes = allBarcodes.split('').map(function (code) {
        return codeList[code];
    });
    return codes.join('');
}

function formatBarcodes(codes) {
    return '| '+(codes)+(' |')
}


class postToBarcode {
    codingBarcodes(postcodes) {
        if (!isInvalid(postcodes)) {
            return {
                error: 'Your input invalid!',
                data: undefined
            }
        }
        if (!isTypeLegal(postcodes)) {
            return {
                error: 'Length wrong!',
                data: undefined
            };
        }
        let postcode = convertFormat(postcodes);
        let checkDigit = calculateCheckDigit(postcode);
        let allPostcodes = getAllPostcodes(postcode, checkDigit);
        let codes = matchPostcodeCodes(allPostcodes);
        return {
            error: undefined,
            data: formatBarcodes(codes)
        }
    }
}
module.exports = postToBarcode;