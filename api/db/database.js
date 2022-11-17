require('dotenv').config();
const pg = require('pg');
const Pool = pg.Pool;

let config;

if (process.env.DATABASE_URL) {
  config = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  }
} else {
  console.log("could not connect to database");
};

const db = new Pool(config);

db.connect(() => {
  console.log('connected to database');
});

module.exports = db;



