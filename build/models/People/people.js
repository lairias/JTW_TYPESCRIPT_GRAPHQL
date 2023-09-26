"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../config"));
const people = config_1.default.define('pe_people', {
  cod_people: {
    type: sequelize_1.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: "Código de persona",
  },
  cod_user: {
    type: sequelize_1.DataTypes.INTEGER,
    comment: "Código de usuario",
    allowNull: false,
    references: {
      model: {
        tableName: 'pe_users',
      },
      key: 'cod_user'
    },
  },
  firstName: {
    type: sequelize_1.DataTypes.STRING(120),
    allowNull: false,
    validate: {
      notEmpty: true
    },
    comment: "Nombre del usuario",
  },
  middleName: {
    type: sequelize_1.DataTypes.STRING(120),
    allowNull: false,
    validate: {
      notEmpty: true
    },
    comment: "Segundo nombre del usuario",
  },
  lastName: {
    type: sequelize_1.DataTypes.STRING(120),
    allowNull: false,
    validate: {
      notEmpty: true
    },
    comment: "Apellido del usuario",
  },
  photoProfile: {
    type: sequelize_1.DataTypes.STRING(250),
    allowNull: false,
    validate: {
      notEmpty: true
    },
    comment: "Foto de perfil del usuario",
  },
  photoBackground: {
    type: sequelize_1.DataTypes.STRING(250),
    allowNull: false,
    validate: {
      notEmpty: true
    },
    comment: "Foto de fondo del usuario",
  },
  gender: {
    type: sequelize_1.DataTypes.ENUM("W", "M"),
    allowNull: false,
    comment: "tipo de genero del usuario"
  },
  age: {
    type: sequelize_1.DataTypes.INTEGER,
    allowNull: false,
    comment: "Edad del usuario",
  },
  birthDate: {
    type: sequelize_1.DataTypes.DATE,
    allowNull: false,
    comment: "Fecha de nacimiento del usuario",
  },
}, { timestamps: false });
exports.default = people;
