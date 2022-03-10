const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
  name: String,
  email: String,
});

const User = model('User', usersSchema);

module.exports = { User };
