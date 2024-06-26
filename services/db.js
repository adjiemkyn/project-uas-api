const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql, params) {
    const connection = await mysql.createConnection(config.db);
    const [results,] = await connection.execute(sql, params);

    return results;
}

async function callSpSearch(id) {
    const connection = await mysql.createConnection(config.db);
    const [results,] = await connection.query('CALL sp_search_data_antrian_by_id(' + id + ')');

    return results;
}

// async function querya(sql, params) {
//     const connection = await mysql.createConnection(config.db);
//     const [resultsa,] = await connection.execute(sql, params);

//     return resultsa;
// }

// async function callSpSearcha(id) {
//     const connection = await mysql.createConnection(config.db);
//     const [resultsa,] = await connection.query('CALL sp_search_data_pasien_by_id(' + id + ')');

//     return resultsa;
// }
module.exports = {
    query,
    callSpSearch,
    // querya,
    // callSpSearcha
}