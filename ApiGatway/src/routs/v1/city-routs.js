const express = require('express');

const { FlightSearchServiceProxy } = require('../../utils/proxy.js');
const { isAdmin  } = require('../../middelwares/auth-middelware.js')

const router = express.Router();



/*
 *  list of all city routes
 *
 *       routs                  method              allowed to do                           explanation
 *  1. '/'                      post                   admin                                createcity
 *  2. '/:id'                   post                   admin                                updatecity
 *  3. '/:id'                   get                    any one                              get a city
 *  4. '/'                      get                    anyone                              get all city
 *  5. '/:id'                   delete                 Admin only                           delete a city
 *  
 *  
 */




//create city rout allow only to admin
router.post('/', 
    isAdmin,
    FlightSearchServiceProxy
);

// update city rout allow only admin 
router.patch('/:id',
    isAdmin,
    FlightSearchServiceProxy
);

// delete city route allow only adim
router.delete('/:id',
    isAdmin,
    FlightSearchServiceProxy
);

// get city rout allow to all
router.get('/:id', 
    FlightSearchServiceProxy
);

// get city rout allow to all
router.get('/', 
    FlightSearchServiceProxy
);



module.exports = router;

