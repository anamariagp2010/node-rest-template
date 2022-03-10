const { ValidationError, Unauthorized } = require('../errors');

const errorCodeToStatusMap = {
  [ValidationError.code]: 400,
  [Unauthorized.code]: 401,
};

module.exports = errorCodeToStatusMap;
