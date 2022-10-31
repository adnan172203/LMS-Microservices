const express = require('express');

const router = express.Router();
const isAuthenticated = require('../isAuthenticated');

const { createCourse, getCourseList, addLesson } = require('../controllers');

// create course
router.post('/', isAuthenticated, createCourse);

// create course
router.post('/addlesson', isAuthenticated, addLesson);

// get all course
router.get('/', getCourseList);

module.exports = router;
