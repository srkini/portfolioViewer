/* eslint-disable max-len */

const getUserList = () => {
  const userList =
    `select cm.client_id, cm.client_first_name, cm.client_last_name, cm.client_email, cm.client_mobile_number` +
    ` from public.client_master cm ` +
    ` where cm.client_status = 'A'`;

  return userList;
};

const getstockList = () => {
  const stockList =
    `select sl.stock_symbol, sl.stock_name, sl.cmp from public.stock_master sl;`;

  return stockList;
};

const addUserCreate = (insertData) => {
  if (Array.isArray(insertData)) {
    const dbfieldValues = insertData;
    const created_user = 'CREATE_USER_NODEJS';
    const insertInto = `INSERT INTO PUBLIC.CLIENT_MASTER (`;
    const mandatoryColumns = `client_first_name, client_last_name, client_email, client_mobile_number, created_user, last_changed_user) VALUES `;
    let fieldValues = '';

    dbfieldValues.forEach((field) => {
      fieldValues =
        fieldValues +
        ', ' +
        `('${field.client_first_name}', '${field.client_last_name}', '${field.client_email}', '${field.client_mobile_number}', '${created_user}', '${created_user}')`;
    });

    fieldValues = fieldValues.substring(2);
    let finalQuery = insertInto + mandatoryColumns + fieldValues + ';';
    return finalQuery;
  }
};

const deActivateUser = (deactivateUserList) => {
  if (Array.isArray(deactivateUserList)) {
    const inactiveStatus = 'I';
    const dbfieldValues = deactivateUserList;
    const updated_user = 'UPDATE_USER_NODEJS';
    const updateTbl = `UPDATE PUBLIC.CLIENT_MASTER `;
    const columnsUpd = `SET client_status = '${inactiveStatus}', last_changed_dt = now(), last_changed_user = '${updated_user}'`;

    let fieldValues = '';
    dbfieldValues.forEach((field) => {
      fieldValues = fieldValues + ', ' + `'${field.client_id}'`;
    });

    fieldValues = fieldValues.substring(2);
    const whereClause = ` WHERE CLIENT_ID IN (${fieldValues})`;
    let finalQuery = updateTbl + columnsUpd + whereClause + ';';
    return finalQuery;
  }
};

const activateUser = (activateUserList) => {
  if (Array.isArray(activateUserList)) {
    const inactiveStatus = 'A';
    const dbfieldValues = activateUserList;
    const updated_user = 'UPDATE_USER_NODEJS';
    const updateTbl = `UPDATE PUBLIC.CLIENT_MASTER `;
    const columnsUpd = `SET client_status = '${inactiveStatus}', last_changed_dt = now(), last_changed_user = '${updated_user}'`;

    let fieldValues = '';
    dbfieldValues.forEach((field) => {
      fieldValues = fieldValues + ', ' + `'${field.client_id}'`;
    });

    fieldValues = fieldValues.substring(2);
    const whereClause = ` WHERE CLIENT_ID IN (${fieldValues})`;
    let finalQuery = updateTbl + columnsUpd + whereClause + ';';
    return finalQuery;
  }
};

module.exports = {getUserList, getstockList, addUserCreate, deActivateUser, activateUser};
