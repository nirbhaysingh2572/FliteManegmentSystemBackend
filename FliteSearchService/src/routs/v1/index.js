const express = require('express');
const router = express.Router();

const cityRoutes = require('./city-routs.js');
const airplaneRouter = require('./airplane-routs.js');
const airportRouter = require('./airport-routs.js');
const flightRouter = require('./flight-routs.js');

router.use('/city', cityRoutes);
router.use('/airplane', airplaneRouter);
router.use('/airport', airportRouter);
router.use('/flight', flightRouter);



module.exports = router;
