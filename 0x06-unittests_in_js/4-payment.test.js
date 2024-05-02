/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const chai = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

const { expect } = chai;

describe('sendPaymentRequestToApi', () => {
  it('sum', () => {
    const spy = sinon.spy(console);
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.log.calledWith('The total is: 10')).to.be.true;
    expect(spy.log.callCount).to.be.equal(1);
  });
});
