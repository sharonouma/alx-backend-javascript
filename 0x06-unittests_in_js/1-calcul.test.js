/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculate the number', () => {
  it('addition', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('subtraction', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('division', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('divisionError', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
