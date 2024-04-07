const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT id, id_pasien, nomor_antrian, waktu_kedatangan, jenis_transaksi, keterangan 
    FROM data_antrian LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return {
        data,
        meta
    }
}




async function create(antrian) {
    const result = await db.query(
        `INSERT INTO data_antrian
      (id_pasien, nomor_antrian, waktu_kedatangan, jenis_transaksi, keterangan) 
      VALUES 
      ('${antrian.id_pasien}, ${antrian.nomor_antrian}, ${antrian.waktu_kedatangan}, ${antrian.jenis_transaksi}, ${antrian.keterangan})`
    );

    let message = 'Error in creating programming language';

    if (result.affectedRows) {
        message = 'Programming language created successfully';
    }

    return { message };
}

async function update(id, antrian) {
    const result = await db.query(
        `UPDATE data_antrian 
      SET nama="${antrian.nama}", released_year=${antrian.released_year}, githut_rank=${antrian.githut_rank}, 
      pypl_rank=${antrian.pypl_rank}, tiobe_rank=${antrian.tiobe_rank} 
      WHERE id=${id}`
    );

    let message = 'Error in updating programming language';

    if (result.affectedRows) {
        message = 'Programming language updated successfully';
    }

    return { message };
}

async function remove(id) {
    const result = await db.query(
        `DELETE FROM programming_languages WHERE id=${id}`
    );

    let message = 'Error in deleting programming language';

    if (result.affectedRows) {
        message = 'Programming language deleted successfully';
    }

    return { message };
}

async function search(id) {
    const rows = await db.callSpSearch(id);
    const data = helper.emptyOrRows(rows);
    return {
        data
    }
}

module.exports = {
    getMultiple,
    create,
    update,
    remove,
    search
}
