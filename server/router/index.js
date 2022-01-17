const express = require('express');
const router = express.Router();
const {validateEndPoints} = require('../middleware/schemaValidator/validateEndPoints');
const {headerSchema} = require('../middleware/schemaValidator/headerSchemaCheck');
const {validateSchema} = require('../middleware/validateSchema');
const {connectionPool} = require('../helpers/createConnectionPool');
const {
  addUserSchema,
  deActivateUserSchema,
  activateUserSchema,
} = require('../middleware/schemaValidator/requestBodyCheck');
const {
  getUserList,
  getstockList,
  addUserCreate,
  deActivateUser,
  activateUser,
} = require('../dbQueries/dmlQueries');

router.use((req, res, next) => {
  validateEndPoints(req.route.path);
  validateSchema(req.headers, headerSchema(req.route.path));
  next();
});

router.get('/', (req, res) => {
  res.status(res.statusCode).json({
    'Health Check': 'Active',
  });
});

router.get('/userList', async (req, res) => {
  const result = await connectionPool(getUserList());
  const userTemplate = {
    Total_Users: result.rowCount === null ? 0 : result.rowCount,
    userList: result.rows,
  };
  res.status(res.statusCode).json(userTemplate);
});

router.post('/addUser', async (req, res, next) => {
  try {
    validateSchema(req.body, addUserSchema);

    const finalInsertQuery = addUserCreate(req.body.userList);
    await connectionPool(finalInsertQuery);
    res.status(res.statusCode).json('Users Successfully added');
  } catch (error) {
    next(error);
  }
});

router.post('/deactivateUser', async (req, res, next) => {
  try {
    validateSchema(req.body, deActivateUserSchema);

    const finalUpdateQuery = deActivateUser(req.body.userList);
    await connectionPool(finalUpdateQuery);
    res.status(res.statusCode).json('User List de-activated Successfully');
  } catch (error) {
    next(error);
  }
});

router.post('/activateUser', async (req, res, next) => {
  try {
    validateSchema(req.body, activateUserSchema);

    const finalUpdateQuery = activateUser(req.body.userList);
    await connectionPool(finalUpdateQuery);
    res.status(res.statusCode).json('User List activated Successfully');
  } catch (error) {
    next(error);
  }
});

router.get('/viewstocks', async (req, res) => {
  const result = await connectionPool(getstockList());
  const stockTemplate = {
    Total_Stocks: result.rowCount === null ? 0 : result.rowCount,
    Stock_List: result.rows,
  };
  res.status(res.statusCode).json(stockTemplate);
});

module.exports = router;
