/**
 * Created by wanggenwang on 16-8-1.
 */
"use strict";
let BarcodeAction = require('../../src/actions/BarcodeAction.js');

describe('BarcodeAction',()=>{
    let barcodeAction;
    beforeEach(()=>{
        barcodeAction = new BarcodeAction();
    });
    it('doAction q',()=>{
        let result = barcodeAction.doAction('q');
        expect(result).toEqual('init');
    });
    it('doAction barcode',()=>{
        let result = barcodeAction.doAction('| :::|| ::|:| ::||: :|::| :|:|: :|:|: |');
        expect(result).toEqual('barcode');
    });
    it('doAction default',()=>{
        let result = barcodeAction.doAction('*****');
        expect(result).toEqual('barcode');
    });
});







