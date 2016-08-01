'use strict';
const zipcode = require('../../postApp/core/Zipcode');
const barcode = require('../../postApp/core/Barcode');
const Zipcode = new zipcode();
const Barcode = new barcode();
describe('postnet', () => {
    describe('zipcode2Barcode', () => {
        it('should translate zipcode to barcode', () => {

            let zipcode = '45056-1234';
            let barcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
            let result = Zipcode.zipcode2Barcode(zipcode);
            expect(result.success).toBeTruthy();
            expect(result.value).toEqual(barcode);

            zipcode = '450561234';
            barcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
            result = Zipcode.zipcode2Barcode(zipcode);
            expect(result.success).toBeTruthy();
            expect(result.value).toEqual(barcode);

            zipcode = '45056';
            barcode = '|:|::|:|:|:||::::|:|::||::||:::|';
            result = Zipcode.zipcode2Barcode(zipcode);
            expect(result.success).toBeTruthy();
            expect(result.value).toEqual(barcode);
        });

        it('should return false when zipcode not valid', () => {
            let zipcode = '456';
            let result = Zipcode.zipcode2Barcode(zipcode);
            expect(result.success).toBeFalsy();
            expect(result.value).toBe('invalid_zipcode');

            zipcode = '4506-1234';
            result = Zipcode.zipcode2Barcode(zipcode);
            expect(result.success).toBeFalsy();
            expect(result.value).toBe('invalid_zipcode');

            zipcode = '10101010101';
            result = Zipcode.zipcode2Barcode(zipcode);
            expect(result.success).toBeFalsy();
            expect(result.value).toBe('invalid_zipcode');
        });
    });

    describe('barcode2Zipcode', () => {
        it('should translate barcode to zipcode', () => {

            let zipcode = '45056-1234';
            let barcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
            let result = Barcode.barcode2Zipcode(barcode);
            expect(result.success).toBeTruthy();
            expect(result.value).toEqual(zipcode);

            zipcode = '45056';
            barcode = '|:|::|:|:|:||::::|:|::||::||:::|';
            result = Barcode.barcode2Zipcode(barcode);
            expect(result.success).toBeTruthy();
            expect(result.value).toEqual(zipcode);
        });
    });

    it('should validate barcode format', () => {
        let barcode = ':|::|:|:|:||::::|:|::||::||:::';
        const result = Barcode.barcode2Zipcode(barcode);
        expect(result.success).toBeFalsy();
        expect(result.value).toBe('invalid_barcode');

    });

    it('should validate zipcode by check digit', () => {
        const result = Barcode.barcode2Zipcode('|:|::|:|:|:||::::|:|::||:::::|||');
        expect(result.success).toBeFalsy();
        expect(result.value).toBe('check_digit_error');
    });
});