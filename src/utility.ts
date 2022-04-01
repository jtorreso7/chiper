const logger = {
  log: (...message: any[]) => {
    // call to any logger service like Sentry, LogRocket to log the error 
    console.log(...message);
  },
}

export {
  logger
}