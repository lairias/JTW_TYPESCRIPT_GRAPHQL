
'use strict';
import {
  Model
} from 'sequelize';
import { IPeople } from '../types';
module.exports = (sequelize: any, DataTypes: any) => {
  class pe_people extends Model<IPeople> implements IPeople {
    cod_people!: number;
    cod_user!: number;
    _token!: string;
    firstName!: string;
    middleName!: string;
    lastName!: string;
    photoProfile!: string;
    photoBackground!: string;
    gender!:string;
    age!: number;
    birthDate!: Date;
    createdAtPeople!: string;
    updatedAtPeople!: string;
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
    _token: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: false,
      validate: {
        notEmpty: true
      },
      comment: "Indicador de primer ingreso",
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
    gender:{
      type:DataTypes.ENUM("W","M"),
      allowNull: false,
      comment:  "tipo de genero del usuario"
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Fecha de nacimiento del usuario",
    },

    createdAtPeople: {
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAtPeople: {
      allowNull: false,
      defaultValue:sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
      type: DataTypes.DATE
    }
  }, {
    timestamps: false,
    sequelize,
    modelName: 'pe_people',
  });
  return pe_people;
};
