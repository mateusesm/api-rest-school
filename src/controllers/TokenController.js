import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.query; /* Coloquei req.query para testar com rotas GET mas sei que deveria ser req.body para rotas POST */

      /* if (!email || !password) {
        return res.status(401).json({
          route: 'token',
          errros: ['Invalid credentials!'],
        });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({
          route: 'token',
          errros: ['User does not exist!'],
        });
      }

      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({
          route: 'token',
          errros: ['Invalid password!'],
        });
      } */

      const token = jwt.sign({
        id: 1,
        email: 'test@mail.com',
      }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ route: 'token', token });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }
}

export default new TokenController();
