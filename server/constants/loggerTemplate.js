const logTemplate = (level, message, fileName, req, res) => {
  const logValue = {
    level: level || 'Default',
    message: message,
    fileName: fileName,
  };

  console.log(logValue);
};

module.exports = logTemplate;
