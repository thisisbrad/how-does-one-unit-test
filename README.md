# how-does-one-unit-test

Describe basic unit testing in NodeJS. This project is a simple Express server using [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) for testing. This working example has been built for students wanting to write tests on open source projects during [Hacktoberfest](https://hacktoberfest.digitalocean.com/) for practice with testing and contributing.

##### Table of Contents

<!-- toc -->

- [🔬 NodeJS and Mocha Guide to Unit Testing](#nodejs-and-mocha-guide-to-unit-testing)
- [✏️ Steps for Unit Testing](#️steps-for-unit-testing)
- [🏆 Goals](#goals)
- [🛠 Tools](#tools)

<!-- tocstop -->

### 🔬 NodeJS and Mocha Guide to Unit Testing

The main objective is to explain and use describe(), it(), and before()/etc hooks.

1. `describe()` is merely for grouping, which you can nest as deep as you need
2. `it()` is a test case for the feature
3. `before()`, `beforeEach()`, `after()`, `afterEach()` are hooks to run before/after first/each it() or describe(). Which means, `before()` is run before first it()/describe()

### ✏️ Steps for Unit Testing

- create `#feature#.test.js` in `/test`
  - Write `describe()` block using Mocha's BDD style interface | [Docs](https://mochajs.org/#bdd)
  - Write nested `it()` in the `describe()` block
    - Use Chai to assert functionality of feature inside `it()` block
  - If needed, write your `before()/etc` hooks. Inside or outside of the `describe()` block | [Docs](https://mochajs.org/#hooks)

### 🏆 Goals:

- [x] Create unit test example in Mocha and Chai
- [ ] Proper Git workflow with feature branches and pull request
- [ ] Create intergation test example with MongoDB and Supertest
- [ ] Mock intergation test example with Sinon
- [ ] Add in Circle CI for testing code once pushed to Github
- [ ] Deploy to Heroku if test passes

### 🛠 Tools:

These tools are optional but really help with testing and code coverage.

- [VSCode](https://code.visualstudio.com/)
- [VSCode Mocha Sidebar](https://marketplace.visualstudio.com/items?itemName=maty.vscode-mocha-sidebar)
