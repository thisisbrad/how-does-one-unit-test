module.exports = settings => ({
  pgUser: process.env.PGUSER,
  pgHost: process.env.PGHOST,
  pgDatabase: process.env.PGDATABASE,
  pgPassword: process.env.PGPASSWORD,
  pgPort: process.env.PGPORT,
  jwt_secret: '3452rfsg5&^@&',
  ...settings,
});
