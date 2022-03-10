require('dotenv').config();

const constants = require('./constants');

const { initializeApp } = require('../lib');

const router = require('./web');
const errorCodeToStatusMap = require('./config/errorCodeToStatusMap');
const passportStrategies = require('./passport/strategies');

initializeApp({
  router,
  errorCodeToStatusMap,
  connectionString: constants.MONGO_CONNECTION_STRING,
  passportStrategies,
}).then((app) => {
  app.listen(constants.PORT);
});
