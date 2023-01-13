const { Client } = require('pg');
const initDB = require("./databaseStructureCreation");

const connectionCredentials = {
    user: process.env.POSTGRES_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
};

const dbClient = new Client({...connectionCredentials});

dbClient.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
    } else {
        console.log('Connected to the database.');
        console.info("Starting database structure creation...");
        initDB(dbClient);
    }
});

module.exports = dbClient;