// database.js
const { Client } = require('pg');
require('dotenv').config({
    path: "./../../.env"
});

const dbClient = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
});

dbClient.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
  } else {
    console.log('Connected to the database.');
  }
});

module.exports = dbClient;