/**
 * Created by hxc on 16-7-28.
 */
let post = require('../../transformer/postTobarcode');

describe('isLegalPostCode', function () {
    it('should return true', function () {
        let test = '12345-1234';
        let result = post.isLegalPostCode(test);
        expect(result).toEqual(true);
    });

    it('should return false', function () {
        let test = '1234';
        expect(post.isLegalPostCode(test)).toEqual(false);
    });

    it('should return false', function () {
        let test = '123456789-';
        expect(post.isLegalPostCode(test)).toEqual(false);
    })
});

describe('formatPostCode', function () {
    it('should return a string without ' - '', function () {
        let test = '45056-1234';
        let expected = [4, 5, 0, 5, 6, 1, 2, 3, 4];
        let result = post.formatPostCode(test);
        expect(result).toEqual(expected);
    });
    it('should return a string without ' - '', function () {
        let test = '450561234';
        let expected = [4, 5, 0, 5, 6, 1, 2, 3, 4]
        let result = post.formatPostCode(test);
        expect(result).toEqual(expected);
    })
});

describe('getCd', function () {
    it('should return a Number of cd', function () {
        let test = [4, 5, 0, 5, 6, 1, 2, 3, 4];
        let expected = 0;
        let result = post.getCD(test);

        expect(result).toEqual(expected);
    });

    it('should return a Number of cd', function () {
        let test = [4, 5, 0, 5, 6, 1, 2, 3, 5];
        let expected = 9;
        let result = post.getCD(test);

        expect(result).toEqual(expected);
    });

});

describe('getBarcode', function () {
    it('should return barcode', function () {
        let postCode = [4, 5, 0, 5, 6, 1, 2, 3, 4];
        let bars = post.loadBars();
        let expected = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        let result = post.getBarCode(postCode, bars, 0);
        expect(result).toEqual(expected);
    });
});

describe('postToBarcode', function () {
    it('should return barcode', function () {
        let test = '45056-1234';
        let result = post.postToBarcode(test);
        let expected = test + '==' + '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|' + '\n' + 'cd is 0';
        expect(result).toEqual(expected);
    })
})
