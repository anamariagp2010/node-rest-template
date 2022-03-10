const Joi = require('@hapi/joi');

const create = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required(),
});

module.exports = {
  create,
};
