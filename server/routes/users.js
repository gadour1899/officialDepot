const express = require('express');
const router = express.Router();
const userAuth = require ('../middlwares/userAuth.js')

// Require controller modules.
const User = require('../controllers/users.js');

/// USERS ROUTES ///

//GET request to fetch all users. NOTE This must come before route for id.
router.post('/addu', User.addUser);
// tp update user information
router.put('/updateu/:id', User.updateUser);
//to delete a user
router.delete('/deleteu/:id', User.deleteUser);

router.get('/getUsers', User.getUsers);
router.get('/token', User.getUser);

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', userAuth.saveUser, User.signUp)

//login route
router.post('/login', User.login )


module.exports = router;