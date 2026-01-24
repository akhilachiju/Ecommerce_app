const isDev = process.env.NODE_ENV === 'development';

const logger = {
  info: (message, ...args) => {
    if (isDev) console.log(message, ...args);
  },
  error: (message, ...args) => {
    if (isDev) console.error(message, ...args);
  },
  warn: (message, ...args) => {
    if (isDev) console.warn(message, ...args);
  }
};

export default logger;
