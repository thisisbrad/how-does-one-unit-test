const { expect } = require('chai');

describe('Math', () => {
  describe('#abs()', () => {
    it('should return positive value of given negative number', () => {
      expect(Math.abs(-5)).to.be.equal(5);
    });
  });

  describe('#floor()', () => {
    it('Returns the largest integer less than or equal to 5.', () => {
      expect(Math.floor(5.5)).to.be.equal(5);
    });
  });
});

describe('Usage of Math', () => {
  describe('degrees to radius', () => {
    it('should return positive value of given 90 degrees', () => {
      const degToRad = 90 * (Math.PI / 180);
      expect(degToRad).to.be.equal(1.5707963267948966);
    });
  });

  describe('height of an equalateral triangle', () => {
    it('Returns the largest integer less than or equal to 5.', () => {
      const degToRad = 60 * (Math.PI / 180);
      const height = 50 * Math.tan(degToRad);
      expect(height).to.be.equal(86.60254037844383);
    });
  });
});
