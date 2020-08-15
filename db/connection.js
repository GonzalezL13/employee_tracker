const mysql = require('mysql2');
const { connected } = require('process');

//connection to database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employees"
});

module.exports = connection;