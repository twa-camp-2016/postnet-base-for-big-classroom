/**
 * Created by yuan on 8/1/16.
 */
/*global require*/
const InitAction = require('../../actions/InitActions');
let action = new InitAction();

describe('InitAction', function () {
    it('test InitAction.doAction should return init', function () {
        let cmd = '1';
        let expected = 'barcodes';
        let result = action.doAction(cmd);
        expect(result).toEqual(expected);
    });

    it('test InitAction.doAction should return postcodes', function () {
        let cmd = '2';
        let expected = 'postcodes';
        let result = action.doAction(cmd);
        expect(result).toEqual(expected);
    });

    it('test InitAction.doAction should return init', function () {
        let cmd = '4';
        spyOn(console, 'log');
        let exp = 'Your print wrong!';
        action.doAction(cmd);
        expect(console.log).toHaveBeenCalledWith(exp);
    });
});
