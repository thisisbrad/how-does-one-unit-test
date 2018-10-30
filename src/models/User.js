const mongoose = require('mongoose');

const { Schema } = mongoose;

// eslint-disable-next-line
const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const validateEmail = email => regex.test(email);

const UserSchema = new Schema({
  name: {
    type: String,
    minlength: [2, 'Name needs to be longer than 2 characters']
  },
  email: {
    type: String,
    index: { unique: true },
    validate: [validateEmail, '{VALUE} is not a valid email address']
  },
  todos: [
    {
      title: String,
      checked: { type: Boolean, default: false }
    }
  ]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
