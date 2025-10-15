export class Logger {
  #currentLevel;

  constructor(level = 'info') {
    this.levels = ['debug', 'info', 'warn', 'error'];
    this.#currentLevel = level;
  }

  shouldLog(level) {
    return this.levels.indexOf(level) >= this.levels.indexOf(this.#currentLevel);
  }

  log(level, message) {
    if (this.shouldLog(level)) {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] [${level.toUpperCase()}]: ${message}`);
    }
  }

  debug(message) {
    this.log('debug', message);
  }

  info(message) {
    this.log('info', message);
  }

  warn(message) {
    this.log('warn', message);
  }

  error(message) {
    this.log('error', message);
  }

  requestLog(requestType, url, options = null) {
    const bodyStr = options ? JSON.stringify(options, null, 2) : '';
    const message = `==> Sending ${requestType} on ${url}${bodyStr ? ' with ' + bodyStr : ''}`;
    this.debug(message);
  }

  responseLog(requestType, url, body = null, status = null) {
    const bodyStr = body ? JSON.stringify(body, null, 2) : '';
    const message = `<== Received response status=${status} ${requestType} on ${url}${bodyStr ? ' with ' + bodyStr : ''}`;
    this.debug(message);
  }

  getCurrentLevel() {
    return this.#currentLevel;
  }
}
