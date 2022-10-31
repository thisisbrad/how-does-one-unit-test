describe('Array', () => {
  let arr = [8, 3, 6];

  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      expect(arr).not.toBeUndefined();
      expect(arr.indexOf(1)).toBe(-1);
    });

    it('should return the correct index in the array', () => {
      expect(arr.indexOf(3)).toBe(1);
    });
  });
});
