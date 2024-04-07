const express = require('express');
const router = express.Router();
const pasien = require('../services/pasien');

/* GET Pasien */
router.get('/', async function (req, res, next) {
    try {
        res.json(await pasien.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Ambil data pasien erorr  `, err.message);
        next(err);
    }
});
/* PUT Pasien */
router.put('/:id', async function (req, res, next) {
    try {
        res.json(await pasien.update(req.params.id, req.body));
    } catch (err) {
        console.error(`Ubah data pasien erorr`, err.message);
        next(err);
    }
});


/* POST Pasien */
router.post('/', async function (req, res, next) {
    try {
        res.json(await pasien.create(req.body));
    } catch (err) {
        console.error(`Tambah data pasien erorr`, err.message);
        next(err);
    }
});

/* DELETE Pasien */
router.delete('/:id', async function (req, res, next) {
    try {
        res.json(await pasien.remove(req.params.id));
    } catch (err) {
        console.error(`Hapus data pasien erorr`, err.message);
        next(err);
    }
});

router.get('/:id', async function (req, res, next) {
    try {
        res.json(await pasien.search(req.params.id));
    } catch (err) {
        console.error(`Cari data pasien erorr `, err.message);
        next(err);
    }
});

module.exports = router;