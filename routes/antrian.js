const express = require('express');
const router = express.Router();
const antrian = require('../services/antrian');

/* GET programming languages. */
router.get('/', async function (req, res, next) {
    try {
        res.json(await antrian.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error while getting antrian `, err.message);
        next(err);
    }
});
/* PUT programming language */
router.put('/:id', async function (req, res, next) {
    try {
        res.json(await antrian.update(req.params.id, req.body));
    } catch (err) {
        console.error(`Error while updating antrian`, err.message);
        next(err);
    }
});


/* POST programming language */
router.post('/', async function (req, res, next) {
    try {
        res.json(await antrian.create(req.body));
    } catch (err) {
        console.error(`Error while creating antrian`, err.message);
        next(err);
    }
});

/* DELETE programming language */
router.delete('/:id', async function (req, res, next) {
    try {
        res.json(await antrian.remove(req.params.id));
    } catch (err) {
        console.error(`Error while deleting antrian`, err.message);
        next(err);
    }
});

router.get('/:id', async function (req, res, next) {
    try {
        res.json(await antrian.search(req.params.id));
    } catch (err) {
        console.error(`Error while antrian `, err.message);
        next(err);
    }
});

module.exports = router;