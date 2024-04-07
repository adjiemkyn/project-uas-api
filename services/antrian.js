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
      (id_pasien, nomor_antrian, jenis_transaksi, keterangan) 
      VALUES 
      (${antrian.id_pasien}, ${antrian.nomor_antrian}, '${antrian.jenis_transaksi}', '${antrian.keterangan}' )`
    );

    let message = 'Tambah data antrian gagal';

    if (result.affectedRows) {
        message = 'Tambah data antrian berhasil';
    }

    return { message };
}

async function update(id, antrian) {
    const result = await db.query(
        `UPDATE data_antrian 
      SET id_pasien="${antrian.id_pasien}", nomor_antrian=${antrian.nomor_antrian}, jenis_transaksi="${antrian.jenis_transaksi}", 
      keterangan="${antrian.keterangan}"
      WHERE id=${id}`
    );

    let message = 'Ubah data antrian gagal';

    if (result.affectedRows) {
        message = 'Ubah data antrian Berhasil';
    }

    return { message };
}

async function remove(id) {
    const result = await db.query(
        `DELETE FROM data_antrian WHERE id=${id}`
    );

    let message = 'Hapus data antrian gagal';

    if (result.affectedRows) {
        message = 'Hapus data antrian berhasil';
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
