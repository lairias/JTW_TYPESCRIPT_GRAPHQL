'use strict';
import {
  Model
}  from 'sequelize';
import {ISession} from "../types"
module.exports = (sequelize:any, DataTypes:any) => {
  class sessions extends Model<ISession> implements ISession {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

     cod_session! : number;
     cod_user!: number;
     ip_address!: string;
     user_agent!:string;
     payload!:string;
     last_activty!:string;
     createdAtSession!:string
updatedAtSession!:string
    static associate(models:any) {
      sessions.hasMany(models.pe_users, {
        foreignKey: 'cod_user',
        onDelete: 'CASCADE',
      })
    }
  }
 
  sessions.init({
    cod_session: {
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
    ip_address: {
      type: DataTypes.STRING(200),
      allowNull: false,
      validate: {
        notEmpty: true
      },
      comment: "Nombre del usuario",
    },
    user_agent: {
      type: DataTypes.STRING(120),
      allowNull: false,
      validate: {
        notEmpty: true
      },
      comment: "Segundo nombre del usuario",
    },
    payload: {
      type: DataTypes.STRING(120),
      allowNull: false,
      validate: {
        notEmpty: true
      },
      comment: "Apellido del usuario",
    },
    last_activty: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true
      },
      comment: "Foto de perfil del usuario",
    },

    createdAtSession: {
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAtSession: {
      defaultValue:sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
      type: DataTypes.DATE
    }
  }, {
      timestamps: false,
    sequelize,
    modelName: 'sessions',
  });
  return sessions;
};