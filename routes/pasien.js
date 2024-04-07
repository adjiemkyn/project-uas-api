const express = require('express');
const router = express.Router();
const pasien = require('../services/pasien');

/* GET programming languages. */
router.get('/', async function (req, res, next) {
    try {
        res.json(await pasien.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error while getting pasien `, err.message);
        next(err);
    }
});
/* PUT programming language */
router.put('/:id', async function (req, res, next) {
    try {
        res.json(await pasien.update(req.params.id, req.body));
    } catch (err) {
        console.error(`Error while updating pasien`, err.message);
        next(err);
    }
});


/* POST programming language */
router.post('/', async function (req, res, next) {
    try {
        res.json(await pasien.create(req.body));
    } catch (err) {
        console.error(`Error while creating pasien`, err.message);
        next(err);
    }
});

/* DELETE programming language */
router.delete('/:id', async function (req, res, next) {
    try {
        res.json(await pasien.remove(req.params.id));
    } catch (err) {
        console.error(`Error while deleting pasien`, err.message);
        next(err);
    }
});

router.get('/:id', async function (req, res, next) {
    try {
        res.json(await pasien.search(req.params.id));
    } catch (err) {
        console.error(`Error while pasien `, err.message);
        next(err);
    }
});

module.exports = router;