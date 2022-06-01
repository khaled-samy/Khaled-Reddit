require('env2')('.env');
const { Pool } = require('pg');

const {
  NODE_ENV, TEST_DB_URL, DEV_DB_URL, DATABASE_URL,
} = process.env;

let dbUrl = '';

let ssl = false;

switch (NODE_ENV) {
  case 'dev':
    dbUrl = DEV_DB_URL;
    break;
  case 'test':
    dbUrl = TEST_DB_URL;
    break;
  default:
    dbUrl = DATABASE_URL;
    ssl = {
      rejectUnauthorized: false,
    };
}

if (!dbUrl) {
  throw new Error('database not exists!');
}

const connection = new Pool({
  connectionString: dbUrl,
  ssl,
});

module.exports = connection;
