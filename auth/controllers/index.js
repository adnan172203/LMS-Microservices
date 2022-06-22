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

//login user
module.exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log('email===>>>>', email);
  try {
    // Validate emil & password
    if (!email || !password) {
      return res
        .status(404)
        .json({ message: 'Please provide an email and password' });
    }

    // Check for user
    let user = await User.findOne({
      where: { email: email },
    });

    if (!user) {
      return res.status(404).json({ message: 'This email does not exist.' });
    }

    // Check if password matches
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ message: 'Password is incorrect.' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    return res.status(201).json({ token: token });
  } catch (err) {
    console.log(err);
  }
};
