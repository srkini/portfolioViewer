const logTemplate = require('../constants/loggerTemplate');

class AppLogger {
  constructor(level, message, fileName) {
    this.level = level;
    this.message = message;
    this.fileName = fileName;
  }

  static logit(level, message, fileName) {
    logTemplate(level, message, fileName);
  }
}

module.exports = AppLogger;
