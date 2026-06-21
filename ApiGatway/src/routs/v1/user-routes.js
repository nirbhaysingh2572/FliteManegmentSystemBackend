const express = require('express');

const { AuthServiceProxy } = require('../../utils/proxy.js');

const router = express.Router();


router.use('/', 
    AuthServiceProxy
);



module.exports = router;

