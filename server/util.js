import jwt from 'jsonwebtoken';
const JWT_SECRET = 'secret';

const getToken = (user) => {
  return jwt.sign({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin
  },
  JWT_SECRET, {
    expiresIn: '1h'
  });
};

const isAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if(token) {
    const onlyToken = token.slice(7, token.length);
    jwt.verify(onlyToken, JWT_SECRET, (error, decode) => {
      if(error) {
        return res.status(401).send({
          msg: 'Invalid token.'
        });
      }
      req.user = token;
      next();
      return;
    });
  }
  return res.status(401).send({
    msg: 'Token was not supplied.'
  });
};

const isAdmin = (req, res, next) => {
  if(req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(401).send({
    msg: 'Admin token is not valid.'
  });
};

export {
  getToken, isAuth, isAdmin
};