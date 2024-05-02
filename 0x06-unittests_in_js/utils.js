/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
const Utils = {
  calculateNumber(type, a, b) {
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
    return 0;
  },
};

module.exports = Utils;
