const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Angel1186657',
    database: 'auth_db'
});

module.exports = pool.promise();