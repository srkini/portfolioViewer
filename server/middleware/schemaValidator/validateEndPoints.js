const endpoint = require('../../constants/validEndPoints');
const {handleError} = require('../../helpers/handleError');

const validateEndPoints = (path) => {
  const validEndpoint = endpoint.includes(path);

  if (!validEndpoint) {
    handleError({
      message: 'Invalid Enpdoint',
      statusCode: 404,
      failedValidation: true,
    });
  }
};

module.exports = {validateEndPoints};
