/**
 * Created by wt on 16-8-1.
 */
/*global require*/
'use strict';
const router = require('../Actions/Action.js');

describe('router', function () {
    let router;
    beforeEach(function () {
        router = new router();
        spyOn(router, 'handle').and.callThrough();
    });
    describe('handle', function () {
        it('test handle is or not called', function () {
            let temp = 'q';
            let state = 'InitAction';
            let actual = router.doAction(temp);
            expect(router.doAction).toHaveBeenCalledWith(temp);
            expect(actual).toEqual(state);
        });

        it('test handle is or not called', function () {
            let temp = '1';
            let state = 'BarcodeToZIPAction';
            let actual = router.doAction(temp);
            expect(router.doAction).toHaveBeenCalledWith(temp);
            expect(actual).toEqual(state);
        });

        it('test handle is or not called', function () {
            let temp = '2';
            let state = 'ZIPToBarcodeAction';
            let actual = router.doAction(temp);
            expect(router.doAction).toHaveBeenCalledWith(temp);
            expect(actual).toEqual(state);
        });
    });
});



