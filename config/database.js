const { createPool } = require("mysql");

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'store'
});

module.exports = pool;