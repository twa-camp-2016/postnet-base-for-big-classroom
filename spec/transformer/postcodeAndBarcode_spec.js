'use strict';
const barToZ = require('../../transformer/barcodeCore.js');
const zipToB = require('../../transformer/zipCodeCore.js');

describe('zipCodeToBarcode',function () {
    it('correct input5',function () {
        let input='12345';
        let zipToBar=new zipToB();
        let result=zipToBar.dealZipcode(input);
        expect(result).toEqual('|:::||::|:|::||::|::|:|:|::|:|:|');
    })
    it('correct input9',function () {
        let input='123456789';
        let zipToBar=new zipToB();
        let result=zipToBar.dealZipcode(input);
        expect(result).toEqual('|:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|');
    })
    it('correct input10',function () {
        let input='12345-1234';
        let zipToBar=new zipToB()
        let result=zipToBar.dealZipcode(input);
        expect(result).toEqual('|:::||::|:|::||::|::|:|:|::::||::|:|::||::|::|:|:|:|');
    })
    it('error input',function () {
        let input='123456';
        let zipToBar=new zipToB()
        let result=zipToBar.dealZipcode(input);
        expect(result).toEqual('please check your zip code!');
    })
    it('error input',function () {
        let input='1234';
        let zipToBar=new zipToB()
        let result=zipToBar.dealZipcode(input);
        expect(result).toEqual('please check your zip code!');
    })
    it('error input',function () {
        let input='12345-123';
        let zipToBar=new zipToB()
        let result=zipToBar.dealZipcode(input);
        expect(result).toEqual('please check your zip code!');
    })
    it('error input',function () {
        let input='1234-51234';
        let zipToBar=new zipToB()
        let result=zipToBar.dealZipcode(input);
        expect(result).toEqual('please check your zip code!');
    })
    it('error input',function () {
        let input='';
        let zipToBar=new zipToB()
        let result=zipToBar.dealZipcode(input);
        expect(result).toEqual('please check your zip code!');
    })
})

describe('barcodeToZipCode',function () {
    it('correct input',function () {
        let input='| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        let barToZip=new barToZ();
        let result=barToZip.dealBarcode(input);
        expect(result).toEqual('45056-1234');
    })
    it('correct input',function () {
        let input='| :::|| ::|:| ::||: :|::| :|:|: :|:|: |';
        let barToZip=new barToZ();
        let result=barToZip.dealBarcode(input);
        expect(result).toEqual('12345');
    })
    it('error input',function () {
        let input='| :::||::|:|::||::|::|:|:|::|:|:     |';
        let barToZip=new barToZ();
        let result=barToZip.dealBarcode(input);
        expect(result).toEqual('please check your barcode!');
    })
    it('error input',function () {
        let input='|:::::::|:|::||::|::|:|:|::|:|:|';
        let barToZip=new barToZ();
        let result=barToZip.dealBarcode(input);
        expect(result).toEqual('please check your barcode!');
    })
    it('error input',function () {
        let input='| :::|| ::|:| ::||: :|::| :|:|: ||::: |';
        let barToZip=new barToZ();
        let result=barToZip.dealBarcode(input); 
        expect(result).toEqual('please check your barcode!');
    })
})
















