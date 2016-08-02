/**
 * Created by wanggenwang on 16-8-2.
 */
let PostcodeAction = require('../../src/actions/PostcodeAction.js');

describe('PostcodeAction', ()=> {
    let postcodeAction;
    beforeEach(()=> {
        postcodeAction = new PostcodeAction();
    });
    it('doAction q', ()=> {
        let result = postcodeAction.doAction('q');
        expect(result).toEqual('init');
    });
    it('doAction postcode', ()=> {
        let result = postcodeAction.doAction('12345');
        expect(result).toEqual('postcode');
    });
    it('doAction default', ()=> {
        let result = postcodeAction.doAction('*****');
        expect(result).toEqual('postcode');
    });
});

