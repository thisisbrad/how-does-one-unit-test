const { assert } = require('chai');

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });

    it('should return 0 when the array is empty', () => {
      const arr = [];
      assert.equal(arr.length, 0);
    });

    it('should return the correct index in the array', () => {
      const arr = [1, 2, 3, 4, 5];
      assert.equal(3, arr.indexOf(4));
    });
  });
});
