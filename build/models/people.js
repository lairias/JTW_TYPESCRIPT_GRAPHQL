'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pe_people extends sequelize_1.Model {
  }
  pe_people.init({
    cod_people: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: "Código de persona",
    },
    cod_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Nombre del usuario",
    },
    firstName: {
      type: DataTypes.STRING(120),
      allowNull: false,
      validate: {
        notEmpty: true
      },
      comment: "Nombre del usuario",
    },
    middleName: {
      type: DataTypes.STRING(120),
      allowNull: false,
      validate: {
        notEmpty: true
      },
      comment: "Segundo nombre del usuario",
    },
    lastName: {
      type: DataTypes.STRING(120),
      allowNull: false,
      validate: {
        notEmpty: true
      },
      comment: "Apellido del usuario",
    },
    photoProfile: {
      type: DataTypes.STRING(250),
      allowNull: false,
      validate: {
        notEmpty: true
      },
      comment: "Foto de perfil del usuario",
    },
    photoBackground: {
      type: DataTypes.STRING(250),
      allowNull: false,
      validate: {
        notEmpty: true
      },
      comment: "Foto de fondo del usuario",
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Edad del usuario",
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Fecha de nacimiento del usuario",
    },
  }, {
    timestamps: false,
    sequelize,
    modelName: 'pe_people',
  });
  return pe_people;
};
