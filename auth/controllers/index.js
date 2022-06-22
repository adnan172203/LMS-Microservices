const User = require('../models').User;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({
    where: { email: email },
  });

  if (user) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  user = new User({
    name,
    email,
    password: passwordHash,
  });

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  const newUser = await user.save();

  if (newUser) {
    return res.status(201).json({ message: 'New User Created', token: token });
  }
};
