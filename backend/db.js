const Pool = require("pg").Pool 

const pool = new Pool({
    user: "amby",
    password: "",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;