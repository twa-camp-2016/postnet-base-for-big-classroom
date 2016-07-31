/**
 * Created by fcc on 16-7-29.
 */
// const routerAction = require("../../action/routerAction.js");
const init = require("../../action/initPage");
const barcodeTurnPostcode = require("../../action/barcodeTurnPostcodePage");
const changePage = require("../../action/changePage");
const postcodeTurnBarcode = require("../../action/postcodeTurnBarcodePage");

describe('test welcome page',function () {
    it('enter changePage',function () {
        let result=init();
        spyOn(console,'log');
        expect(result.doAction('1')).toEqual('changePage');
    });

    it('exit',function () {
        let result=init();
        spyOn(console,'log');
        spyOn(process,'exit');
        result.doAction('q');
        expect(process.exit).toHaveBeenCalled();
    });

    it('enter init page',function () {
        let result=init();
        spyOn(console,'log');
        expect(result.doAction('1234')).toEqual('init');
    });
});

describe('test changePage page',function () {
    it('enter postcodeTurnBarcode page',function () {
        let result=changePage();
        expect(result.doAction('1')).toEqual('postcodeTurnBarcode');
    });

    it('enter barcodeTurnPostcode page',function () {
        let result=changePage();
        expect(result.doAction('2')).toEqual('barcodeTurnPostcode');
    });

    it('enter init page',function () {
        let result=changePage();
        expect(result.doAction('3')).toEqual('init');
    });

    it('enter changePage ',function () {
        let result=changePage();
        spyOn(console,'log');
        expect(result.doAction('26h4h')).toEqual('changePage');
    });
});


describe('test postcodeTurnBarcode page',function () {
    it('enter changePage',function () {
        let result=postcodeTurnBarcode();
        expect(result.doAction('1')).toEqual('changePage');
    });

    it('enter init page',function () {
        let result=postcodeTurnBarcode();
        expect(result.doAction('2')).toEqual('init');
    });

    it('exit',function () {
        let result=postcodeTurnBarcode();
        spyOn(console,'log');
        spyOn(process,'exit');
        result.doAction('q');
        expect(process.exit).toHaveBeenCalled();
    });

    it('enter changePage ',function () {
        let result=postcodeTurnBarcode();
        spyOn(console,'log');
        expect(result.doAction('16372')).toEqual('changePage');
    });
});

describe('test postcodeTurnBarcode page',function () {
    it('enter changePage',function () {
        let result=barcodeTurnPostcode();
        expect(result.doAction('1')).toEqual('changePage');
    });

    it('enter init page',function () {
        let result=barcodeTurnPostcode();
        expect(result.doAction('2')).toEqual('init');
    });

    it('exit',function () {
        let result=barcodeTurnPostcode();
        spyOn(console,'log');
        spyOn(process,'exit');
        result.doAction('q');
        expect(process.exit).toHaveBeenCalled();
    });

    it('enter changePage ',function () {
        let result=barcodeTurnPostcode();
        spyOn(console,'log');
        expect(result.doAction('16372')).toEqual('changePage');
    });
});