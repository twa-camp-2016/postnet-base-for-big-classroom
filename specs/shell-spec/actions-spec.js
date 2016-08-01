/**
 * Created by Sunshine on 2016/7/29.
 */
'use strict';
const InitAction = require('../../src/shell/InitAction.js');
const BarcodeToPostcodeAction = require('../../src/shell/BarcodeToPostcodeAction');
const PostcodeToBarcodeAction = require('../../src/shell/PostcodeToBarcodeAction');
const DealPostcodeToBarcodeAction = require('../../src/shell/DealPostcodeToBarcodeAction');
const DealBarcodeToPostcodeAction = require('../../src/shell/DealBarcodeToPostcodeAction');


describe('InitAction test',function(){
    iit('init test',function(){
        let result = new InitAction().help;
        expect(result).toEqual('\nWelcome 欢迎进入转换界面\n* initMenu:\n  1 - 邮编转条码\n  2 - 条码转邮编\n  q - 退出');
    });
});

describe('BarcodeToPostcodeAction test',function(){
    iit('barcodeToPostcode test',function(){
        let result = new BarcodeToPostcodeAction().help;
        expect(result).toEqual('\n * 条形码转换邮编的状态\n  a - 输入条形码并转换.\n  q - 返回主界面.');
    });
});

describe('PostcodeToBarcodeAction test',function(){
    iit('postcodeToBarcode test',function(){
        let result = new PostcodeToBarcodeAction().help;
        expect(result).toEqual('\n * 邮编转条码的状态\n  1 - 输入并转换.\n  q - 返回主界面.');
    });
});

describe('DealBarcodeToPostcodeAction test',function(){
    iit('dealBarcodeToPostcode test',function(){

        let result =new DealBarcodeToPostcodeAction().help;
        expect(result).toEqual(' * 请输入 ：');
    });
});

describe('DealPostcodeToBarcodeAction test',function(){
    iit('dealPostcodeToBarcode test',function(){
        let result = new DealPostcodeToBarcodeAction().help;
        expect(result).toEqual(' * 请输入 ：');
    });
});