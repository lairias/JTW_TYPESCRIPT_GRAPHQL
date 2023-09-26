'use strict';
import { Model } from 'sequelize';
import {IError} from "../types"
module.exports = (sequelize:any , DataTypes:any ) => {
  class log_error extends Model<IError> implements IError {
    
    cod_error_log!:number;
    des_error!:string;
    type_error!:string;
    path_error!:string;
    updatedAtError!:string;
    createdAtError!:string;
  }
  log_error.init({
    
    cod_error_log: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      comment: "Código de errro",
      type: DataTypes.INTEGER
    },
    des_error: {
      comment: "descripción del error",
      type: DataTypes.STRING
    },
    path_error: {
      comment: "ruta de error",
      type: DataTypes.STRING
    },
    type_error: {
      comment: "ruta de error",
      type: DataTypes.STRING
    },
    createdAtError: {
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAtError: {
      defaultValue:sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
      type: DataTypes.DATE
    }
  }, {
    timestamps:false,
    sequelize,
    modelName: 'log_error',
  });
  return log_error;
};

