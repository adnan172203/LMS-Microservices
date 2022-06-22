var express = require('express');
var router = express.Router();

const { createUser, login } = require('../controllers');

//create user/signup
router.post('/', createUser);

//login
router.post('/login', login);

module.exports = router;
