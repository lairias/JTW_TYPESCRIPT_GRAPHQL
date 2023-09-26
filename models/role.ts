'use strict';
import { Model } from 'sequelize';
import { IRole } from '../types';
module.exports = (sequelize: any, DataTypes: any) => {
  class role extends Model<IRole> implements IRole {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    cod_role!: number;
    nam_role!: string;
    desc_role!: string;
    ins_role!: boolean;
    createdAtRole!: string
    updatedAtRole!: string
    static associate(models: any) {
      role.belongsToMany(models.pe_users, {
        through: 'user_has_role',
      });
      role.belongsToMany(models.permission, {
        through: 'role_has_permission',
      });
      // define association here
    }
  }
  role.init({
    cod_role: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: "Código de rol",
    },
    desc_role: {
      type: DataTypes.STRING(250),
      allowNull: false,
      comment: "Descripción de rol",
    },
    ins_role: {
      type: DataTypes.STRING(250),
      defaultValue: true,
      allowNull: false,
      comment: "Indicador de estado de rol",
    },
    nam_role: {
      allowNull: false,
      type: DataTypes.STRING(120),
      unique: true,
      comment: "Nombre de rol",
    },
    createdAtRole: {
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      type: DataTypes.DATE
    },
    updatedAtRole: {
      defaultValue:sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
      type: DataTypes.DATE
    }
  }, {
    timestamps:false,
    sequelize,
    modelName: 'role',
  });
  return role;
};