/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const chai = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const { expect } = chai;

describe('sendPaymentRequestToApi', () => {
  it('sum', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });
});
