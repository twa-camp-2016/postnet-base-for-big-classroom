'use strict'
let a=require('../../transform/postNet');

describe('barcodeToZipcode',function () {
    it('it should be return result',function(){
        let barcode='|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        expect(new a().barcodeToZipcode(barcode)).toEqual({ success: true, value: '45056-123' });
    })
    it('should be ..',function(){
        let barcode='|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::';
        expect(new a().barcodeToZipcode(barcode)).toEqual({success: false, error: 'invalid_barcode'});

    })
    it('should be ..',function(){
        let barcode='|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||::||';
        expect(new a().barcodeToZipcode(barcode)).toEqual({success: false, error: 'check_digit_not_match'});

    })
})

describe('zipcodeToBarcode',function(){
    it('it should be return result',function(){
        let code='45056-1234';
        expect(new a().zipcodeToBarcode(code)).toEqual({success:true,value:'|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|'});
    })
    it('should be ..',function(){
        let code='4505';
        expect(new a().zipcodeToBarcode(code)).toEqual({success: false, error: 'invalid_code'});
    })
});
//describe('')