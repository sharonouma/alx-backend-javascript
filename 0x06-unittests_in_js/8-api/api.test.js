/* eslint-disable jest/valid-expect */
const request = require('request');
const { expect } = require('chai');

describe('api integration test', () => {
  const API_URL = 'http://localhost:7865';

  // eslint-disable-next-line jest/lowercase-name
  it('GET / returns correct response', () => new Promise((done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  }));
});
