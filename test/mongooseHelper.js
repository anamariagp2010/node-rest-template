const Cleaner = require('database-cleaner');
const { initializeOrm } = require('../lib');

const dbCleaner = new Cleaner('mongodb');

beforeEach((done) => {
  initializeOrm(process.env.MONGO_CONNECTION_STRING).then(({ connection }) => {
    dbCleaner.clean(connection.db, () => {
      done();
    });
  });
});

afterAll(async () => {
  const { connection } = await initializeOrm(process.env.MONGO_CONNECTION_STRING);
  return connection.close();
});
