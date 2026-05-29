const express = require('express');

const { FlightControler } = require('../../controler/index');

const router = express.Router();

router.post('/', FlightControler.create);
router.patch('/:id', FlightControler.update);
router.delete('/:id', FlightControler.destroy);
router.get('/:id', FlightControler.get);
router.get('/', FlightControler.getAll);

module.exports = router;
