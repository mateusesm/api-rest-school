import Student from '../models/Student';
import Photo from '../models/Photo';

class StudentController {
  async index(req, res) {
    try {
      const students = await Student.findAll({
        attributes: ['id', 'name', 'email', 'lastname', 'age', 'weight', 'height'],
        order: [['id', 'DESC']],
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
      const student = await Student.create(req.body);
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

      const student = await Student.findByPk(id);

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

      const student = await Student.findByPk(id, {
        attributes: ['id', 'name', 'lastname', 'age', 'weight', 'height'],
        order: [['id', 'DESC']],
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

      const student = await Student.findByPk(id);

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

export default new StudentController();
