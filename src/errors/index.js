const {
  libHelpers: { buildErrorClasses },
} = require('../../lib');

const errorsMap = buildErrorClasses(['BadRequest', 'ValidationError', 'Unauthorized']);

module.exports = errorsMap;
