var express = require('express');
var router = express.Router();
const isAuthenticated = require('../isAuthenticated');

const { createCourse, getCourseList } = require('../controllers');

//create course
router.post('/', isAuthenticated, createCourse);

//get all course
router.get('/', getCourseList);

module.exports = router;
