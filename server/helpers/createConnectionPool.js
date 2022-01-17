const {Pool} = require('pg');
const AppLogger = require('../middleware/logger');
const {DB_USER, DB_HOST, DB_DATABASE_NAME, DB_PASSWORD, DB_PORT} = process.env;
const {handleError} = require('../helpers/handleError');

const dbconfig = {
  user: DB_USER,
  host: DB_HOST,
  database: DB_DATABASE_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
};

const connectionPool = async (fullQuery) => {
  try {
    const createPool = new Pool(dbconfig);
    AppLogger.logit('info', 'Database connection successfully established', __filename);
    const client = await createPool.connect();

    const queryResponse = await client.query(fullQuery);
    client.release();
    return queryResponse;
  } catch (error) {
    AppLogger.logit(
      'error',
      `Database connection failed due to following error : ${error}`,
      __filename
    );
    handleError({
      message: `Failed during database operation: ${error.message}`,
      statusCode: 500,
      failedValidation: true,
    });
  }
};

/**
 * Connect to database using connection pool
 */
// connectionPool.connect((err, client, release) => {
//   if (err) {
//     return err;
//   } else {
//     client.query('select now()', (err, dbresponse) => {
//       console.log(dbresponse.rows);
//     });
//   }
//   release();
// });

module.exports = {connectionPool};
