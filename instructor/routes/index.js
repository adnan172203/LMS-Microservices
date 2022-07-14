var express = require('express');
var router = express.Router();

const { createCourse, getCourseList } = require('../controllers/course');

//create course
router.post('/', createCourse);

//get all course
router.get('/', getCourseList);

module.exports = router;
