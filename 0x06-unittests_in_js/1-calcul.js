/* eslint-disable consistent-return */
function calculateNumber(type, a, b) {
  if (type.toUpperCase() === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type.toUpperCase() === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type.toUpperCase() === 'DIVIDE') {
    if (Math.round(b) !== 0) {
      return Math.round(a) / Math.round(b);
    }
    return 'Error';
  }
}

module.exports = calculateNumber;
