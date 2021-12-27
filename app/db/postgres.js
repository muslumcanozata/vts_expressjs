const pgp = require('pg-promise')(/* options */);

exports.connectPostgres = async (username, password, host, port, db_name) => {
    try{
        await pgp(`postgres://${username}:${password}@${host}:${port}/${db_name}`);
    } catch (error) {
        throw new Error("Cannot Connect to PostgreSQL!"+error);
    }
}
