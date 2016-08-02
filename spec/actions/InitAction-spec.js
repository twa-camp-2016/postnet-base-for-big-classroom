/**
 * Created by wanggenwang on 16-8-2.
 */
let InitAction = require('../../src/actions/InitAction.js');

describe('InitAction', ()=> {
    let initAction;
    beforeEach(()=> {
        initAction = new InitAction();
    });
    it('doAction 1', ()=> {
        let result = initAction.doAction('1');
        expect(result).toEqual('postcode');
    });
    it('doAction 2', ()=> {
        let result = initAction.doAction('2');
        expect(result).toEqual('barcode');
    });
    it('doAction default', ()=> {
        let result = initAction.doAction('*****');
        expect(result).toEqual('init');
    });
});



