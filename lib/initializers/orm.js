const mongoose = require('mongoose');

let mongooseConnection;

function initializeOrm(connectionString) {
  if (!mongooseConnection) {
    mongooseConnection = mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  return mongooseConnection;
}

module.exports = {
  initializeOrm,
};
