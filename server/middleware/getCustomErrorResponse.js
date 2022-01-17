const AppLogger = require('./logger');

const getCustomErrorResponse = (err, req, res, next) => {
  const {message, statusCode, failedValidation} = err;

  if (failedValidation) {
    AppLogger.logit('error', message, __filename, req, res);

    res
      .status(statusCode)
      .json({message: message, statusCode: statusCode, failedValidation: failedValidation});
  }
};

module.exports = {getCustomErrorResponse};
