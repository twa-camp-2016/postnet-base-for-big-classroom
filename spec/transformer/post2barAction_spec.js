/**
 * Created by hxc on 16-7-29.
 */
var post2bar = require('../../transformer/Actions/Post2barAction');

describe('post2barAction', function () {
    it('should return name of string', function () {
        let result = post2bar.doAction('q');
        expect(result).toEqual('init');
    });

    it('should return a string post2Barcode', function () {
        let result = post2bar.doAction('12345');
        expect(result).toEqual('post2Barcode');
    })
});