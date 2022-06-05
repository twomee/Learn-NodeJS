const myLogger = (req, res, next) => {
    console.log('Someone entered to the site', Date.now());
    next();
  };
  module.exports = myLogger;