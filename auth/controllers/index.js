const User = require('../models').User;

module.exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({
    name,
    email,
    password,
  });
  const newUser = await user.save();
  if (newUser) {
    return res.status(201).json({ message: 'New User Created', data: newUser });
  }
};
