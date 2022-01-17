const Joi = require('joi');

const addUserSchema = Joi.object({
  userList: Joi.array()
    .items(
      Joi.object().keys({
        client_first_name: Joi.string().min(1).max(100).required(),
        client_last_name: Joi.string().min(0).max(50),
        client_email: Joi.string().min(1).max(80).required(),
        client_mobile_number: Joi.string().min(1).max(30).required(),
      })
    )
    .required()
    .min(1)
    .max(10),
}).required();

const deActivateUserSchema = Joi.object({
  userList: Joi.array()
    .items(
      Joi.object().keys({
        client_id: Joi.string().min(1).max(100).required(),
      })
    )
    .required()
    .min(1)
    .max(10),
}).required();

const activateUserSchema = Joi.object({
  userList: Joi.array()
    .items(
      Joi.object().keys({
        client_id: Joi.string().min(1).max(100).required(),
      })
    )
    .required()
    .min(1)
    .max(10),
}).required();

module.exports = {addUserSchema, deActivateUserSchema, activateUserSchema};
