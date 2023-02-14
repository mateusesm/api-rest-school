"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Student extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Name must has between 3 and 255 characters long!',
            },
          },
        },
        lastname: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Lastname must has between 3 and 255 characters long!',
            },
          },
        },
        email: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          unique: {
            msg: 'Email already exist!',
          },
          validate: {
            isEmail: {
              msg: 'Invalid email!',
            },
          },
        },
        age: {
          type: _sequelize2.default.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Age must be an integer number!',
            },
          },
        },
        weight: {
          type: _sequelize2.default.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Weight must be a number!',
            },
          },
        },
        height: {
          type: _sequelize2.default.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Height must be a number!',
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: 'student_id' });
  }
} exports.default = Student;
