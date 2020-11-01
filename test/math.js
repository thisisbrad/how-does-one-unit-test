const { expect } = require('chai');

describe('Math', function () {
  describe('#abs()', function () {
    it('should return positive value of given negative number', function () {
      expect(Math.abs(-5)).to.be.equal(5);
    });
  });

  describe('#floor()', function () {
    it('Returns the largest integer less than or equal to 5.', function () {
      expect(Math.floor(5.5)).to.be.equal(5);
    });
  });
});

describe('Usage of Math', function () {
  describe('degrees to radius', function () {
    it('should return positive value of given 90 degrees', function () {
      const degToRad = 90 * (Math.PI / 180);
      expect(degToRad).to.be.equal(1.5707963267948966);
    });
  });

  describe('height of an equalateral triangle', function () {
    it.only('Returns the largest integer less than or equal to 5.', function () {
      const degToRad = 60 * (Math.PI / 180);
      const height = 50 * Math.tan(degToRad);
      expect(height).to.be.equal(86.60254037844383);
    });
  });
});
