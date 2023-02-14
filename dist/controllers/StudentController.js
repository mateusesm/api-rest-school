"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Student = require('../models/Student'); var _Student2 = _interopRequireDefault(_Student);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

class StudentController {
  async index(req, res) {
    try {
      const students = await _Student2.default.findAll({
        attributes: ['id', 'name', 'email', 'lastname', 'age', 'weight', 'height'],
        order: [['id', 'DESC'], [_Photo2.default, 'id', 'DESC']],
        include: {
          model: _Photo2.default,
          attributes: ['url', 'filename'],
        },
      });
      return res.json(students);
    } catch (error) {
      return res.status(400).json({
        errors: error.message,
      });
    }
  }

  async store(req, res) {
    try {
      const student = await _Student2.default.create(req.body);
      return res.json(student);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID is missing!'],
        });
      }

      const student = await _Student2.default.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exist!'],
        });
      }

      const updatedStudent = await student.update(req.body);

      return res.json(updatedStudent);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID is missing!'],
        });
      }

      const student = await _Student2.default.findByPk(id, {
        attributes: ['id', 'name', 'lastname', 'age', 'weight', 'height'],
        order: [['id', 'DESC'], [_Photo2.default, 'id', 'DESC']],
        include: {
          model: _Photo2.default,
          attributes: ['url', 'filename'],
        },
      });

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exist!'],
        });
      }

      return res.json(student);
    } catch (error) {
      return res.status(400).json({
        errors: error.message,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID is missing!'],
        });
      }

      const student = await _Student2.default.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exist!'],
        });
      }

      await student.destroy();

      return res.json('Student deleted with success!');
    } catch (error) {
      return res.status(400).json({
        errors: error.message,
      });
    }
  }
}

exports. default = new StudentController();
