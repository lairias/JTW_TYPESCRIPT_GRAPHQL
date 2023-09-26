'use strict';

import { IUserHasRole } from "../types";

const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class user_has_role extends Model<IUserHasRole> implements IUserHasRole {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    cod_user!: number;
    cod_role!: number;
  }
  user_has_role.init({
    cod_user: {
      type: DataTypes.INTEGER,
      comment: "Código de usuario",
    },
    cod_role: {
      type: DataTypes.INTEGER,
      comment: "Código de rol",
    },
  }, {
    
    sequelize,
    timestamps:false,
    modelName: 'user_has_role',
  });
  return user_has_role;
};