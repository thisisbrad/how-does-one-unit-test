module.exports = settings => ({
  mongodb: {
    uri: 'mongodb://localhost:27017/how_does_one_unit_test',
  },
  jwt_secret: '3452rfsg5&^@&',
  ...settings,
});
