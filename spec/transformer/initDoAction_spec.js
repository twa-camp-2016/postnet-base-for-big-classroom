/**
 * Created by hxc on 16-7-29.
 */
let init = require('../../transformer/initDoAction');
describe('initDoAction', function () {
    it('should return post2Barcode', function () {
        let result = init.doAction('1');
        expect(result).toEqual('post2Barcode');
    });

    it('should return barcode2Post', function () {
        let result = init.doAction('2');
        expect(result).toEqual('barcode2Post');
    });

    it('should return init', function () {
        let result = init.doAction('4');
        expect(result).toEqual('init');
    })
});