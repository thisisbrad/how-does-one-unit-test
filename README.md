# how-does-one-unit-test

Describe basic unit testing in NodeJS. This project is a simple Express server using [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) for testing. This working example has been built for students wanting to write tests on open source projects during [Hacktoberfest](https://hacktoberfest.digitalocean.com/) for practice with testing and contributing.

##### Table of Contents

<!-- toc -->

- [🔬 NodeJS and Mocha Guide to Unit Testing](#-nodejs-and-mocha-guide-to-unit-testing)
- [✏️ Steps for Unit Testing](#️-steps-for-unit-testing)
- [🏆 Goals](#-goals)
- [📦 Packages](#-packages)
- [🛠 Tools](#-tools)

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

### 📦 Packages:

You will need Node and MongoDB installed. Using **Node v10.11.0** and **Mongodb v4.0.2** for this demo.
If you don't have these installed follow this [guide](#guide-to-install-node-and-mongodb).

Use yarn or npm to install the following packahes. Testing will require these packages:

- [mocha](https://mochajs.org/)
- [chai](https://www.chaijs.com/)
- [sinon](https://sinonjs.org/)
- [express](https://expressjs.com/)
- [mongoose](https://mongoosejs.com/)
- [eslint](https://eslint.org/)

TD;LR

`npm install mocha chai sinon express mongoose`

`yarn add mocha chai sinon express mongoose`

#### Guide to Install Node and MongoDB

Install NodeJS via [nvm](https://github.com/creationix/nvm)

`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`

- `nvm install stable`
- `nvm use stable`
- `which node` || `node -v` should now show your version

Install [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/index.html#install-mongodb-community-edition-with-homebrew) via [Homebrew](https://brew.sh/)

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

- `brew update`
- `brew install mongodb`
- `mkdir -p /data/db`
- `whoami` to get your username on the computer
- `chown *WHOAMI-RESULT* /data/db`
- `brew services start mongo` now MongoDB will remain running in the background

`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`

- `nvm install stable`
- `nvm use stable`
- `which node` || `node -v` should now show your version

### 🔑 Keys:

You will need to create `dev.js` in `config/`.

```js
module.exports = settings => ({
  mongodb: {
    uri: 'mongodb://localhost:27017/#YOUR-MONGO-DB#'
  },
  ...settings
});
```

### 🛠 Tools:

These tools are optional but really help with testing and code coverage.

- [VSCode](https://code.visualstudio.com/)
- [VSCode Mocha Sidebar](https://marketplace.visualstudio.com/items?itemName=maty.vscode-mocha-sidebar)
