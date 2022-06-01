const Joi = require('joi');

const signUpSchema = Joi.object({
  username: Joi.string().min(3).max(200).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{8,30}$/).required(),
  repeatPassword: Joi.ref('password'),
});

const signUpValidation = (dataObj) => signUpSchema.validateAsync(dataObj);

module.exports = { signUpValidation };
