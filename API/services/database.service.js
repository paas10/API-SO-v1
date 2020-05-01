const mysql = require('mysql2');
const database_configuration = require('../config/database.config');

const connection = mysql.createConnection({
    host : database_configuration.inventarios.HOST,
    user : database_configuration.inventarios.USER,
    password : database_configuration.inventarios.PASSWORD,
    database : database_configuration.inventarios.DB,
});

connection.connect(error => {
    if (error) throw error;
    console.info("Connected to database");
})

module.exports = connection;