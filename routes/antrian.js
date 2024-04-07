const express = require('express');
const router = express.Router();
const antrian = require('../services/antrian');

/* GET Antrian */
router.get('/', async function (req, res, next) {
    try {
        res.json(await antrian.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Ambil data antrian erorr `, err.message);
        next(err);
    }
});
/* PUT Antrian*/
router.put('/:id', async function (req, res, next) {
    try {
        res.json(await antrian.update(req.params.id, req.body));
    } catch (err) {
        console.error(`Ubah data antrian erorr `, err.message);
        next(err);
    }
});


/* POST Antrian*/
router.post('/', async function (req, res, next) {
    try {
        res.json(await antrian.create(req.body));
    } catch (err) {
        console.error(`Tambah data antrian erorr `, err.message);
        next(err);
    }
});

/* DELETE Antrian*/
router.delete('/:id', async function (req, res, next) {
    try {
        res.json(await antrian.remove(req.params.id));
    } catch (err) {
        console.error(`Hapus data antrian erorr `, err.message);
        next(err);
    }
});

router.get('/:id', async function (req, res, next) {
    try {
        res.json(await antrian.search(req.params.id));
    } catch (err) {
        console.error(`Cari data antrian error `, err.message);
        next(err);
    }
});

module.exports = router;