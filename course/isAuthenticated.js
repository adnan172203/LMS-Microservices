const jwt = require('jsonwebtoken');

module.exports = async function isAuthenticated(req, res, next) {
  // const token = req.headers.authorization;

  // jwt.verify(token, 'hhj4h545h4j5hj45h5j4h545', (err, user) => {
  //   if (err) {
  //     return res.json({ message: err });
  //   } else {
  //     req.user = user;
  //     next();
  //   }
  // });

  const { authorization } = req.headers;
  try {
    const token = authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { userId } = decoded;
    req.userId = userId;
    next();
  } catch (err) {
    next('Authentication failure!');
  }
};
