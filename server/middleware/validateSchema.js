const {handleError} = require('../helpers/handleError');

const validateSchema = (data, schema, err) => {
  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };
  const {error} = schema.validate(data, options);
  if (error || err) {
    handleError({message: `${error.message}`, statusCode: 404, failedValidation: true});
  }
};

module.exports = {validateSchema};
