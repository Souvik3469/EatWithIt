const express = require('express');
const isAuthenticatedUser = require('../middlewares/auth');
const router = express.Router();
const { registerUser, loginUsers, logoutUser} = require('../controllers/userController');
router.route('/register').post(registerUser);
router.route('/login').post(loginUsers);
router.route('/logout').get(logoutUser);
module.exports = router;
