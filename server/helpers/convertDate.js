const yearMonthDateFormat = (fullDate) => {
  const dateToBeConverted = fullDate ? new Date(fullDate) : new Date();

  const extractYear = dateToBeConverted.getFullYear();
  let extractMonth = dateToBeConverted.getMonth() + 1;
  extractMonth = '0' + extractMonth.toString().slice(-2);
  let extractDate = dateToBeConverted.getDate();
  extractDate = '0' + extractDate.toString().slice(-2);

  const finalDate = extractYear + '/' + extractMonth + '/' + extractDate;
  return finalDate;
};

module.exports = {yearMonthDateFormat};
