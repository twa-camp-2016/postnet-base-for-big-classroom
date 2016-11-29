/**
 * Created by hxc on 16-7-29.
 */
let post2bar = require('../../transformer/Actions/Bar2postAction');
describe('bar2postAction', function () {
    it('should return init', function () {
        let result = post2bar.doAction('q');
        expect(result).toEqual('init');
    });

    it('should return barcode2post', function () {
        let result = post2bar.doAction('| :::|: |');
        expect(result).toEqual('barcode2Post')
    });
})