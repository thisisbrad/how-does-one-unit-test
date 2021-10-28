describe('User Object', () => {
  const user = {}; // declare our user variable so it's in scope for the tests

  before(() => {
    // before the tests we make a user object to test with
    user.name = 'Ricky';
    user.location = 'Sunnyvale';
    user.greeting = () => {
      console.log('You know the TVs With The Click-Clackers');
    };
  });

  describe('properties and methods', () => {
    it('should have a name property on the object', () => {});

    it('should have a greeting method on the object', () => {});

    it('should have all the properties on the object', () => {});
  });
});
