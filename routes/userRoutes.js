const express = require('express');
const { updateUser, getUserInfo } = require('../controllers/userController');
const { validateUpdateUser } = require('../middlewares/validation');

const router = express.Router();

router.get('/me', getUserInfo);

router.patch('/me', validateUpdateUser, updateUser);

module.exports = router;
