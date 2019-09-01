const assert = require('assert');
const { divide } = require('../../src/operations');

describe('divide', function() {
  it('should throw an error if divisor equals 0', function() {
    assert.throws(() => divide(2, 0));
  });
});