const { User } = require('./users.model');
const UserSerializer = require('./users.serializer');
const usersService = require('./users.service');

module.exports = {
  User,
  UserSerializer,
  ...usersService,
};
