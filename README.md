# how-does-one-unit-test

[![CircleCI](https://circleci.com/gh/thisisbrad/how-does-one-unit-test/tree/master.svg?style=svg)](https://circleci.com/gh/thisisbrad/how-does-one-unit-test/tree/master)

## Node Testing for Hacktoberfest 2022

This is a basic group of Node routes and Postgres models setup for testing. You're welcome to create a test suite for the routes and models. Create a issue outlining the tests you aim to complete, then submit a PR that covers it.

Describe basic unit testing in NodeJS. This project is a simple Express server using [Jest](https://jestjs.io/) for testing. This working example has been built for students wanting to write tests on open source projects during [Hacktoberfest](https://hacktoberfest.digitalocean.com/) for practice with testing and contributing.

##### Table of Contents

<!-- toc -->

- [🔬 NodeJS and Jest Guide to Unit Testing](#-nodejs-and-jest-guide-to-unit-testing)
- [✏️ Steps for Unit Testing](#️-steps-for-unit-testing)
- [🏆 Goals](#-goals)
- [📦 Packages](#-packages)
- [🛠 Tools](#-tools)

<!-- tocstop -->

### 🔬 NodeJS and Jest Guide to Unit Testing

The main objective is to explain and use describe(), it(), and before()/etc hooks.

1. `describe()` is merely for grouping, which you can nest as deep as you need
2. `it()` is a test case for the feature
3. `beforeEach()`, `afterEach()` are hooks to run before/after first/each it() or describe(). Which means, `beforeEach()` will run before very it()/describe()

### ✏️ Steps for Unit Testing

- create `#feature#.test.js` in `/test`
  - Write `describe()` block using Jest's BDD style interface | Behavior-driven development (BDD)
  - Write nested `it()` in the `describe()` block
    - Use Jest Matcher functions to assert functionality of feature inside `it()` block | [Jest Matches](https://jestjs.io/docs/using-matchers)
  - If needed, write your `before()/etc` hooks. Inside or outside of the `describe()` block | [Setup and Teardown](https://jestjs.io/docs/setup-teardown)
- To submit your own test cases. If all cases are covered, feel free to create a new Model to test or new Node routes.
  - Write a test suite outlined above
  - Write out comments and steps for your testing as an exmaple to others to see.
  - Create your own feature branch then attach your issue to the pull request.

### 🏆 Goals:

- [x] Create unit test example in Jest
- [x] Proper Git workflow with feature branches and pull request
- [x] Create intergation test example with Postgres and Supertest
- [ ] Add in GitHub Actions for testing code once pushed to Github
- [ ] Deploy to AWS if test passes
- [ ] Add new test cases for Hacktoberfest

### 📦 Packages:

You will need Node and Postgres installed. Using **Node v18.12.0** and **Postgres v15** for this demo.
If you don't have these installed follow this [guide](#guide-to-install-node-and-postgres).

Use yarn or npm to install the following packahes. Testing will require these packages:

- [Jest](https://jestjs.io/)
- [Express](https://expressjs.com/)
- [Postgres](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)
- [Docker](https://www.docker.com/)
- [ESlint](https://eslint.org/)

TD;LR

`npm install jest express sequelize`

`yarn add jest express sequelize`

#### Guide to Install Node and Postgres

Install NodeJS via [nvm](https://github.com/creationix/nvm)

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash`

- `nvm install stable`
- `nvm use stable`
- `which node` || `node -v` should now show your version

Install [Postgres](https://www.postgresql.org/download/macosx/) via [Postgres App for Mac](https://postgresapp.com/) use [Postico](https://eggerapps.at/postico2/) for GUI.

`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`

- Download Posgresapp and follow install instructions.
- `sudo mkdir -p /etc/paths.d && echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp`

### 🔑 Keys:

You will need to create `dev.js` in `config/`.

```js
module.exports = settings => ({
  postgres: {
    pgUser: 'root',
    pgHost: ,
    pgDatabase: postgres,
    pgPassword: postgres_password,
  },
  ...settings,
});
```

### Docker Setup

TODO: Outline setting up Docker container

### GitHub Actions and Railway Setup

TODO: Outline setting up Github and Railway

### 🛠 Tools:

These tools are optional but really help with testing and code coverage.

- [VSCode](https://code.visualstudio.com/)
- [VSCode Docker extention](https://code.visualstudio.com/docs/containers/overview)
