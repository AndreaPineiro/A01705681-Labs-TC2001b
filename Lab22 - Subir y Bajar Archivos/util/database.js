const mysql = require('mysql2');

const pool = mysql.createPool ({
    host: 'localhost',
    user: 'root',
    database: 'Lab17_TC2005b',
    password: '',
});

module.exports = pool.promise();