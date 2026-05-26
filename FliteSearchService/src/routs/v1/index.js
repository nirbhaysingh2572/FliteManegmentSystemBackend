const express = require('express');
const router = express.Router();

const cityRoutes = require('./city-routs.js');

router.use('/city', cityRoutes);



module.exports = router;
