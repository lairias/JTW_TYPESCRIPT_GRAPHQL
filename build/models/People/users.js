"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../config"));
const people_1 = __importDefault(require("./people"));
const Usuario = config_1.default.define('pe_users', {
  cod_people: {
    type: sequelize_1.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: "Código de persona",
  },
  cod_user:{
    type: sequelize_1.INTEGER,
    comment: "Código de usuario",
    allowNull: false,
    references: {
      model: {
        tableName: 'pe_users',
      },
      key: 'cod_user'
    },
  },
  _token: {
    type: sequelize_1.STRING(250),
    allowNull: false,
    defaultValue: false,
    validate: {
      notEmpty: true
    },
    comment: "Indicador de primer ingreso",
  },
  firstName:{
    type: sequelize_1.STRING(120),
    allowNull: false,
    validate: {
      notEmpty: true
    },
    comment: "Nombre del usuario",
  },
  middleName:{
    type:sequelize_1.STRING(120),
    allowNull: false,
    validate: {
      notEmpty: true
    },
    comment: "Segundo nombre del usuario",
  },
  lastName: {
    type:sequelize_1.STRING(120),
    allowNull: false,
    validate: {
      notEmpty: true
    },
    comment: "Apellido del usuario",
  },
  photoProfile: {
    type:sequelize_1.STRING(250),
    allowNull: false,
    validate: {
      notEmpty: true
    },
    comment: "Foto de perfil del usuario",
  },
  photoBackground: {
    type:sequelize_1.STRING(250),
    allowNull: false,
    validate: {
      notEmpty: true
    },
    comment: "Foto de fondo del usuario",
  },
  gender:{
    type:sequelize_1.ENUM("W","M"),
    allowNull: false,
    comment:  "tipo de genero del usuario"
  },
  age: {
    type:sequelize_1.INTEGER,
    allowNull: false,
    comment: "Edad del usuario",
  },
  birthDate: {
    type:sequelize_1.DATE,
    allowNull: false,
    comment: "Fecha de nacimiento del usuario",
  },
  
  createdAtPeople: {
    defaultValue: sequelize_1.literal("CURRENT_TIMESTAMP"),
    type: sequelize_1.DATE
  },
  updatedAtPeople: {
    defaultValue:sequelize_1.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
    type: sequelize_1.DATE
  }

}, { timestamps: false,
});
Usuario.hasMany(people_1.default, { foreignKey: 'cod_user', sourceKey: 'cod_user' });
people_1.default.belongsTo(Usuario, { foreignKey: 'cod_user', targetKey: 'cod_user' });
exports.default = Usuario;
