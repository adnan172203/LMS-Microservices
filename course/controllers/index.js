const Course = require('../models').Course;

module.exports.createCourse = async (req, res) => {
  const { title, description, price, duration, category, image } = req.body;

  const course = new Course({
    title,
    description,
    price,
    duration,
    category,
    image,
  });
  const newCourse = await course.save();
  if (newCourse) {
    return res
      .status(201)
      .json({ message: 'New Course Created', data: newCourse });
  }
};

module.exports.getCourseList = async (req, res) => {
  const allCourses = await Course.findAll({});
  if (allCourses) {
    return res.status(201).json({ data: allCourses });
  }
};
