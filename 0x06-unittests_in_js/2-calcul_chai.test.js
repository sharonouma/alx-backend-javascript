/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const { expect } = chai;

describe('calculate the number', () => {
  it('addition', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equal(6);
  });
  it('subtraction', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4);
  });
  it('division', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equal(0.2);
  });
  it('divisionError', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.equal('Error');
  });
});
