// Prod Keys are okay -- DO NOT COMMIT Dev keys
module.exports = settings => ({
  mongodb: {
    uri: process.env.MONGO_URI
  },
  ...settings
});
