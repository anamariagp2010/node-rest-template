const { User } = require('./users.model');
const validations = require('./users.validations');
const { ValidationError } = require('../../errors');

const all = ({ pageConfig: { page, pageSize } }) => {
  return User.find()
    .limit(pageSize)
    .skip(page * pageSize)
    .sort('name');
};

const create = async ({ user }) => {
  const validationResult = validations.create.validate(user);
  if (validationResult.error) {
    throw new ValidationError({ details: validationResult.error.details });
  }

  return User.create(user);
};

module.exports = { all, create };
