import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create({
        id: 1,
        name: 'Mateus',
        email: 'mateus@gmail.com',
        password: '12345678',
      });

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
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
      return res.json(users);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, name, email } = user;

      return res.json({ id, name, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist!'],
        });
      }

      const newDatas = await user.update(req.body);
      const { id, name, email } = newDatas;

      return res.json({ id, name, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.usserId);

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

export default new UserController();
