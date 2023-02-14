"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    try {
      const newUser = await _User2.default.create(req.body);

      const { id, name, email } = newUser;

      return res.json({ id, name, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'name', 'email'] });
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);
      const { id, name, email } = user;

      return res.json({ id, name, email });
    } catch (error) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist!'],
        });
      }

      const newDatas = await user.update(req.body);
      const { id, name, email } = newDatas;

      return res.json({ id, name, email });
    } catch (error) {
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist!'],
        });
      }

      await user.destroy();
      return res.json('User deleted with success!');
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }
}

exports. default = new UserController();
