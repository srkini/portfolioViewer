require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./server/router');
const appLogger = require('./server/middleware/logger');
const {getCustomErrorResponse} = require('./server/middleware/getCustomErrorResponse');

app.use(express.json());
app.get('/', router);
app.get('/userList', router);
app.get('/viewstocks', router);
app.post('/addUser', router);
app.post('/deactivateUser', router);
app.post('/activateUser', router);
app.get('**', router);
app.post('**', router);
app.use(getCustomErrorResponse);

app
  .listen(process.env.PORT, () => {
    appLogger.logit('info', `Server Started on Port : ${process.env.PORT}`, __filename);
  })
  .on('error', function (err) {
    if (err.code === 'EADDRINUSE') {
      appLogger.logit('error', 'Address or port is already in use', __filename);
      process.exit();
    }
  });
