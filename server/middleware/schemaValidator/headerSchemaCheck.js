const {
  HEALTH_CHECK_SECRET,
  USER_LIST_SECRET,
  ADD_USER_SECRET,
  DEACTIVATE_USER_SECRET,
  ACTIVATE_USER_SECRET,
  VIEW_STOCK_SECRET
} = process.env;
const Joi = require('joi');
const {handleError} = require('../../helpers/handleError');

const healthCheckHeaderSchema = Joi.object({
  clientsecret: Joi.string().required().valid(HEALTH_CHECK_SECRET),
});

const userListHeaderSchema = Joi.object({
  clientsecret: Joi.string().required().valid(USER_LIST_SECRET),
});

const addUserHeaderSchema = Joi.object({
  clientsecret: Joi.string().required().valid(ADD_USER_SECRET),
});

const deactivateUserSchema = Joi.object({
  clientsecret: Joi.string().required().valid(DEACTIVATE_USER_SECRET),
});

const activateUserSchema = Joi.object({
  clientsecret: Joi.string().required().valid(ACTIVATE_USER_SECRET),
});

const viewstocksSchema = Joi.object({
  clientsecret: Joi.string().required().valid(VIEW_STOCK_SECRET),
});


const headerSchema = (path) => {
  if (path === '/') {
    return healthCheckHeaderSchema;
  } else if (path === '/userList') {
    return userListHeaderSchema;
  } else if (path === '/addUser') {
    return addUserHeaderSchema;
  } else if (path === '/deactivateUser') {
    return deactivateUserSchema;
  } else if (path === '/activateUser') {
    return activateUserSchema;
  } else if (path === '/viewstocks') {
    return viewstocksSchema;
  } else {
    handleError({
      message: `Invalid Header Key / Required Header Key`,
      statusCode: 404,
      failedValidation: true,
    });
  }
};

module.exports = {headerSchema};
