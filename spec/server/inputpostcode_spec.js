/**
 * Created by tong on 16-8-5.
 */
'use strict';

//let app = require('../../transformer/server/server');
let supertest = require('supertest');
let request = supertest('localhost:3000');

describe("server/inputpostcode", function () {


  it("input postcode should return barcode", function (done) {
    let input = "12345-1234";
    let check = 5;
    let expected = {
      error: '',
      data: "|:::||::|:|::||::|::|:|:|::::||::|:|::||::|::|:|:|:|" + " cd is " + check
    };

    request
            .post('/inputpostcode')
            .type('form')
            .send({cmd: input})
            .expect(expected)
            .end((err, res)=> {
              if (err || !res.ok) {
                done.fail(err);
              } else {
                done();
              }
            });
  });

  it("input postcode should return info(contain error info)", function (done) {
    let input = "1234";
    let expected = {
      error: "the letter or the length of number is illegal(the length should be 5/9/10 contain' - ')",
      data: ''
    };

    request
            .post('/inputpostcode')
            .type('form')
            .send({cmd: input})
            .expect(expected)
            .end((err, res)=> {
              if (err || !res.ok) {
                done.fail(err);
              } else {
                done();
              }
            });
  });
});