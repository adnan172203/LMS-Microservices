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

  // try {
  //   const token = req.headers["authorization"].split(" ")[1];
  //   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
  //     if (err) {
  //       return res.status(401).send({
  //         message: "Auth failed",
  //         success: false,
  //       });
  //     } else {
  //       req.body.userId = decoded.id;
  //       next();
  //     }
  //   });
  // } catch (error) {
  //   return res.status(401).send({
  //     message: "Auth failed",
  //     success: false,
  //   });
  // }

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
