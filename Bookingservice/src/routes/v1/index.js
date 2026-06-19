const express = require('express');

const { BookingControler }= require('../../controlers/index');
const { BookingMiddelware } = require('../../middelwares/index');


const router = express.Router();

// booking routes
router.post('/booking',
    BookingMiddelware.validateCreateBooking,
    BookingControler.create
);

router.get('/booking/:id', 
    BookingControler.get
);

router.get('/booking', 
    BookingControler.getAll
);



module.exports = router;