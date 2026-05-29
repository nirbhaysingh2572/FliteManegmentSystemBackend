const express = require('express');

const { AirportControler } = require('../../controler/index');

const router = express.Router();

router.post('/', AirportControler.create);
router.patch('/:id', AirportControler.update);
router.delete('/:id', AirportControler.destroy);
router.get('/:id', AirportControler.get);
router.get('/', AirportControler.getAll);


module.exports = router;

