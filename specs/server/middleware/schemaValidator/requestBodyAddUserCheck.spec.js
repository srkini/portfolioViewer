/* eslint-disable max-len */
const {
  addUserSchema,
} = require('../../../../server/middleware/schemaValidator/requestBodyAddUserCheck');
const {validateSchema} = require('../../../../server/middleware/validateSchema');
const validPayload = {
  userList: [
    {
      client_first_name: 'Srikanth',
      client_last_name: 'Kini',
      client_email: 'srikanthgk27gmail.com',
      client_mobile_number: '9591642782',
    },
    {
      client_first_name: 'Srinath',
      client_last_name: 'Kini',
      client_email: 'srinathkini7@gmail.com',
      client_mobile_number: '9686777750',
    },
    {
      client_first_name: 'Srinidhi',
      client_last_name: 'kini',
      client_email: 'srinidhikini7@gmail.com',
      client_mobile_number: '9743265127',
    },
    {
      client_first_name: 'Srikanth',
      client_last_name: 'Kini',
      client_email: 'srikanthgk27gmail.com',
      client_mobile_number: '9591642782',
    },
    {
      client_first_name: 'Srinath',
      client_last_name: 'Kini',
      client_email: 'srinathkini7@gmail.com',
      client_mobile_number: '9686777750',
    },
    {
      client_first_name: 'Srinidhi',
      client_last_name: 'kini',
      client_email: 'srinidhikini7@gmail.com',
      client_mobile_number: '9743265127',
    },
    {
      client_first_name: 'Srikanth',
      client_last_name: 'Kini',
      client_email: 'srikanthgk27gmail.com',
      client_mobile_number: '9591642782',
    },
    {
      client_first_name: 'Srinath',
      client_last_name: 'Kini',
      client_email: 'srinathkini7@gmail.com',
      client_mobile_number: '9686777750',
    },
    {
      client_first_name: 'Srinidhi',
      client_last_name: 'kini',
      client_email: 'srinidhikini7@gmail.com',
      client_mobile_number: '9743265127',
    },
    {
      client_first_name: 'Srikanth',
      client_last_name: 'Kini',
      client_email: 'srikanthgk27gmail.com',
      client_mobile_number: '9591642782',
    },
    {
      client_first_name: 'Srinath',
      client_last_name: 'Kini',
      client_email: 'srinathkini7@gmail.com',
      client_mobile_number: '9686777750',
    },
    {
      client_first_name: 'Srinidhi',
      client_last_name: 'kini',
      client_email: 'srinidhikini7@gmail.com',
      client_mobile_number: '9743265127',
    },
  ],
};

describe('requestBodyCheck test scenarios', () => {
  it('should throw error if body is not present', () => {
    const data = undefined;
    try {
      validateSchema(data, addUserSchema);
    } catch (error) {
      expect(error).toEqual({
        failedValidation: true,
        message: '"value" is required',
        statusCode: 404,
      });
    }
  });

  it('should throw error if body is not of type object', () => {
    const data = false;
    try {
      validateSchema(data, addUserSchema);
    } catch (error) {
      expect(error).toEqual({
        failedValidation: true,
        message: '"value" must be of type object',
        statusCode: 404,
      });
    }
  });

  it('should throw error if body.userList is not of type array', () => {
    const data = {
      userList: false,
    };
    try {
      validateSchema(data, addUserSchema);
    } catch (error) {
      expect(error).toEqual({
        failedValidation: true,
        message: '"userList" must be an array',
        statusCode: 404,
      });
    }
  });

  it('should throw error if body.userList is array and has 0 items', () => {
    const data = {
      userList: [],
    };
    try {
      validateSchema(data, addUserSchema);
    } catch (error) {
      expect(error).toEqual({
        failedValidation: true,
        message: '"userList" must contain at least 1 items',
        statusCode: 404,
      });
    }
  });

  it('should throw error if body.userList is array and has more than 10 items', () => {
    try {
      validateSchema(validPayload, addUserSchema);
    } catch (error) {
      expect(error).toEqual({
        failedValidation: true,
        message: '"userList" must contain less than or equal to 10 items',
        statusCode: 404,
      });
    }
  });

  it('should throw error if body.userList is array and its item is not object', () => {
    const data = {
      userList: [1],
    };
    try {
      validateSchema(data, addUserSchema);
    } catch (error) {
      expect(error).toEqual({
        failedValidation: true,
        message: '"userList[0]" must be of type object',
        statusCode: 404,
      });
    }
  });

  it('should throw error if body.userList[0] is array and an empty object', () => {
    const data = {
      userList: [{}],
    };
    try {
      validateSchema(data, addUserSchema);
    } catch (error) {
      expect(error).toEqual({
        failedValidation: true,
        message:
          '"userList[0].client_first_name" is required. "userList[0].client_email" is required. "userList[0].client_mobile_number" is required',
        statusCode: 404,
      });
    }
  });

  it('should throw error if body.userList[0].client_first_name is not present', () => {
    const data = {
      userList: [
        {
          client_last_name: 'Kini',
          client_email: 'srikanthgk27gmail.com',
          client_mobile_number: '9591642782',
        },
      ],
    };
    try {
      validateSchema(data, addUserSchema);
    } catch (error) {
      expect(error).toEqual({
        failedValidation: true,
        message: '"userList[0].client_first_name" is required',
        statusCode: 404,
      });
    }
  });

  it('should throw error if body.userList[0].client_first_name is not string', () => {
    const data = {
      userList: [
        {
          client_first_name: 1,
          client_last_name: 'Kini',
          client_email: 'srikanthgk27gmail.com',
          client_mobile_number: '9591642782',
        },
      ],
    };
    try {
      validateSchema(data, addUserSchema);
    } catch (error) {
      expect(error).toEqual({
        failedValidation: true,
        message: '"userList[0].client_first_name" must be a string',
        statusCode: 404,
      });
    }
  });

  it('should not throw error if body.userList[0].client_last_name is not present', () => {
    const data = {
      userList: [
        {
          client_first_name: 'Srikanth',
          client_email: 'srikanthgk27gmail.com',
          client_mobile_number: '9591642782',
        },
      ],
    };

    const result = validateSchema(data, addUserSchema);
    expect(result).toBeUndefined();
  });

  it('should throw error if body.userList[0].client_last_name is not string', () => {
    const data = {
      userList: [
        {
          client_first_name: 'Srikanth',
          client_last_name: false,
          client_email: 'srikanthgk27gmail.com',
          client_mobile_number: '9591642782',
        },
      ],
    };
    try {
      validateSchema(data, addUserSchema);
    } catch (error) {
      expect(error).toEqual({
        failedValidation: true,
        message: '"userList[0].client_last_name" must be a string',
        statusCode: 404,
      });
    }
  });

  it('should throw error if body.userList[0].client_email is not string', () => {
    const data = {
      userList: [
        {
          client_first_name: 'Srikanth',
          client_last_name: 'Kini',
          client_email: false,
          client_mobile_number: '9591642782',
        },
      ],
    };
    try {
      validateSchema(data, addUserSchema);
    } catch (error) {
      expect(error).toEqual({
        failedValidation: true,
        message: '"userList[0].client_email" must be a string',
        statusCode: 404,
      });
    }
  });

  it('should throw error if body.userList[0].client_email is not present', () => {
    const data = {
      userList: [
        {
          client_first_name: 'Srikanth',
          client_last_name: 'Kini',
          client_mobile_number: '1234',
        },
      ],
    };
    try {
      validateSchema(data, addUserSchema);
    } catch (error) {
      expect(error).toEqual({
        failedValidation: true,
        message: '"userList[0].client_email" is required',
        statusCode: 404,
      });
    }
  });

  it('should throw error if body.userList[0].client_mobile_number is not string', () => {
    const data = {
      userList: [
        {
          client_first_name: 'Srikanth',
          client_last_name: 'Kini',
          client_email: 'abc@gmail.com',
          client_mobile_number: false,
        },
      ],
    };
    try {
      validateSchema(data, addUserSchema);
    } catch (error) {
      expect(error).toEqual({
        failedValidation: true,
        message: '"userList[0].client_mobile_number" must be a string',
        statusCode: 404,
      });
    }
  });

  it('should throw error if body.userList[0].client_mobile_number is not present', () => {
    const data = {
      userList: [
        {
          client_first_name: 'Srikanth',
          client_last_name: 'Kini',
          client_email: 'abc@gmail.com',
        },
      ],
    };
    try {
      validateSchema(data, addUserSchema);
    } catch (error) {
      expect(error).toEqual({
        failedValidation: true,
        message: '"userList[0].client_mobile_number" is required',
        statusCode: 404,
      });
    }
  });

  it('should not throw error if valid payload is present', () => {
    const data = {
      userList: [
        {
          client_first_name: 'Srikanth',
          client_last_name: 'Kini',
          client_email: 'abc@gmail.com',
          client_mobile_number: '1234',
        },
      ],
    };
    const result = validateSchema(data, addUserSchema);
    expect(result).toBeUndefined();
  });
});
