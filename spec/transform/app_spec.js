/**
 * Created by duanxue on 16-7-29.
 */
'use strict'
let init = require('../../transform/action/initAction');
let number = require('../../transform/action/numberAction');
let letter = require('../../transform/action/letterAction');
const continueNumber = require('../../transform/action/continueNumber');
const continueLetter = require('../../transform/action/continueLetter');
const welcome = require('../../transform/action/welcomeAction');

describe('initAction', function () {
    it('show ..', function () {
        let cmd = '1';
        expect(new init().doAction(cmd)).toEqual('number');
    })
    it('show ..', function () {
        let cmd = '2';
        expect(new init().doAction(cmd)).toEqual('letter');
    })
    it('show ..', function () {
        let cmd = '3';
        expect(new init().doAction(cmd)).toEqual('init');
    })
});

describe('numberAction', function () {
    it('show ..', function () {
        let cmd = '1';
        expect(new number().doAction(cmd)).toEqual('continueNumber');
    })
    it('show ..', function () {
        let cmd = 'b';
        expect(new number().doAction(cmd)).toEqual('init');
    })
});

describe('letterAction', function () {
    it('show ..', function () {
        let cmd = '2';
        expect(new letter().doAction(cmd)).toEqual('continueLetter');
    })
    it('show ..', function () {
        let cmd = 'b';
        expect(new letter().doAction(cmd)).toEqual('init');
    })
});

describe('continueAction', function () {
    it('show ..', function () {
        let cmd = '1';
        expect(new continueNumber().doAction(cmd)).toEqual('number');
    })
    it('show ..', function () {
        let cmd = '2';
        expect(new continueNumber().doAction(cmd)).toEqual('init');
    })
    it('show ..', function () {
        let cmd = '3';
        expect(new continueNumber().doAction(cmd)).toEqual('number');
    })
});

describe('continueAction', function () {
    it('show ..', function () {
        let cmd = '1';
        expect(new continueLetter().doAction(cmd)).toEqual('letter');
    })
    it('show ..', function () {
        let cmd = '2';
        expect(new continueLetter().doAction(cmd)).toEqual('init');
    })
    it('show ..', function () {
        let cmd = '3';
        expect(new continueLetter().doAction(cmd)).toEqual('letter');
    })
});
