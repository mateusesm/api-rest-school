import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      route: 'token middleware',
      errros: ['Login required!'],
    });
  }

  const { text, token } = authorization.split(' ');

  try {
    const datas = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = datas;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        route: 'token middleware',
        errors: ['Invalid user!'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (error) {
    return res.status(401).json({
      route: 'token middleware',
      errors: error,
    });
  }
};
