/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculate the number', () => {
  it('whole numbers', () => {
    assert.equal(calculateNumber(2, 3), 5);
  });
  it('floating numbers', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('mixed numbers', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('negative numbers', () => {
    assert.equal(calculateNumber(-2.50, -4.98), -7);
  });
});
