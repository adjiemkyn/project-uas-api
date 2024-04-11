const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.querya(
        `SELECT id, nama, usia, alamat, tgl_lahir, no_tlp 
    FROM data_pasien LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return {
        data,
        meta
    }
}




async function create(pasien) {
    const resulta = await db.querya(
        `INSERT INTO data_pasien
      (nama, usia, alamat, tgl_lahir, no_tlp) 
      VALUES 
      ('${pasien.nama}', ${pasien.usia},  '${pasien.alamat}', ${pasien.tgl_lahir}, ${pasien.no_tlp} )`
    );

    let message = 'Tambah data Pasien gagal';

    if (resulta.affectedRows) {
        message = 'Tambah data pasien berhasil';
    }

    return { message };
}

async function update(id, pasien) {
    const resulta = await db.query(
        `UPDATE data_pasien 
      SET nama="${pasien.nama}", usia=${pasien.usia}, alamat="${pasien.alamat}", 
     tgl_lahir=${pasien.tgl_lahir}, no_tlp=${pasien.no_tlp} 
      WHERE id=${id}`
    );

    let message = 'Ubah data Pasien gagal';

    if (resulta.affectedRows) {
        message = 'Ubah data pasien berhasil';
    }

    return { message };
}

async function remove(id) {
    const resulta = await db.query(
        `DELETE FROM data_pasien WHERE id=${id}`
    );

    let message = 'Hapus data Pasien gagal';

    if (resulta.affectedRows) {
        message = 'Hapus data pasien berhasil';
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
