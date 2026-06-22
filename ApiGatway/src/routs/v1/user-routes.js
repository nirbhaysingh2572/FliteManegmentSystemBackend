const express = require('express');

const { AuthServiceProxy } = require('../../utils/proxy.js');
const { isAdmin,authenticateAndValidateParamsUserId } = require('../../middelwares/auth-middelware.js')

const router = express.Router();

/*
 *  list of all user routes
 *
 *       routs                  method              allowed to do 
 *  1. '/signup'                post                   anyone
 *  2. '/signin'                post                   anyone
 *  3. '/:id'                   get                    authenticated self user only
 *  4. '/:id'                   delete                 authenticated self user only
 *  5. '/addRole'               post                   Admin only
 *  6. '/isAuthenticated'       get                    Internal servise only       
 *  7. '/isAdmin/:id'           get                    Internal servise only
 *  
 *  
 */


router.post('/signup', 
    AuthServiceProxy
);

router.post('/signin',
    AuthServiceProxy
);

router.get('/:id',
    authenticateAndValidateParamsUserId,
    AuthServiceProxy
);

router.delete('/:id',
    authenticateAndValidateParamsUserId,
    AuthServiceProxy
);


router.post('/addRole',
    isAdmin,
    AuthServiceProxy
)





module.exports = router;

