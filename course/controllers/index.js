const { Course, CourseLesson } = require('../models');

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
    return res.status(201).json(newCourse);
  }

  // res.send('course is created');
};

module.exports.getCourseList = async (req, res) => {
  const allCourses = await Course.findAll({
    order: [['createdAt', 'ASC']],
    include: [
      {
        model: CourseLesson,
        as: 'courseLesson',
      },
    ],
  });
  if (allCourses) {
    return res.status(201).json({ data: allCourses });
  }
};

module.exports.addLesson = async (req, res) => {
  const { title, content, video, courseId, userId } = req.body;

  const addCourseLesson = new CourseLesson({
    title,
    content,
    video,
    courseId,
    userId,
  });

  await addCourseLesson.save();

  res.json(addCourseLesson);
};
