const handleError = (occuredError) => {
  const {message, statusCode, failedValidation} = occuredError;

  const throwError = {
    message: message || 'Unknown Error Occurred',
    statusCode: statusCode || 500,
    failedValidation: failedValidation,
  };

  throw throwError;
};

module.exports = {handleError};
