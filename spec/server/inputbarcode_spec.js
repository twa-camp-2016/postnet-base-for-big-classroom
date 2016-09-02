/**
 * Created by tong on 16-8-5.
 */
'use strict';
//let app = require('../../transformer/server/server');
let supertest = require('supertest');
let request = supertest('localhost:3000');


describe("server/inputbarcode", function () {

  it("input barcode should return an Object", function (done) {
    let barcode = "| :::|| ::|:| ::||: :|::| :|:|: :|:|: |";
    let expected = {
      error: '',
      data: "12345"
    };

    request
            .post('/inputbarcode')
            .type('form')
            .send({cmd: barcode})
            .expect(expected)
            .end((err, res)=> {
              if (err || !res.ok) {
                done.fail(err);
              } else {
                done();
              }
            });
  });

  it("input barcode should return an Object contain error info", function (done) {
    let barcode = "| :::|| ::|:| ::||: :|::| :|:|: :::|| ::|:| ::||: :|::| :*|:: |";
    let expected = {
      error: "error input(only '|'':'' 'can be accepted and ' 'is must)",
      data: ''
    };

    request
            .post('/inputbarcode')
            .type('form')
            .send({cmd: barcode})
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
