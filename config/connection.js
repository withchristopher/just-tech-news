// import the Sequalise constructor from the library
const Sequalize = require('sequalize');

require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const sequalize = new Sequalize(process.env.DB_NAME, process.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
});

module.exports = sequalize;