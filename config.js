const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "",
        user: "root",
        password: "",
        database: "db_antrian",
        connectTimeout: 60000,
        multipleStatements: true
    },
    listPerPage: 10,
};
module.exports = config;