const User = require('../src/models/User');

describe('Updating Users from the database', () => {
  let bob;

  beforeEach(async () => {
    bob = await new User({ name: 'Bob', likes: 0 });
    await bob.save();
  });

  const assertName = (operation, done) => {
    operation
      .then(() => User.find({}))
      .then(users => {
        expect(users.length === 1);
        expect(users[0].name === 'Alex');
        done();
      });
  };

  it('expects with helper function', done => {
    // testing helper
    bob.set('name', 'Alex');
    expectName(bob.save(), done);
  });

  it('updates by instance using set n save', done => {
    // Update record using set and save methods
    bob.set('name', 'Alex');
    bob
      .save()
      .then(() => User.find({}))
      .then(users => {
        expect(users.length === 1);
        expect(users[0].name === 'Alex');
        done();
      });
  });

  it('updates by model instance', done => {
    //
    expectName(bob.update({ name: 'Alex' }), done);
  });

  it('updates by model class', done => {
    //
    expectName(User.update({ name: 'Bob' }, { name: 'Alex' }), done);
  });

  it('can find and update by model class', done => {
    //
    expectName(User.findOneAndUpdate({ name: 'Bob' }, { name: 'Alex' }), done);
  });

  it('can find and update with ID by model class', done => {
    //
    expectName(User.findByIdAndUpdate(bob._id, { name: 'Alex' }), done);
  });

  it('can increment likes by 1', done => {
    //
    User.update({ name: 'Bob' }, { $inc: { likes: 1 } })
      .then(() => User.findOne({ name: 'Bob' }))
      .then(user => {
        expect(user.likes === 1);
        done();
      });
  });
});
