'use strict'
import {Model} from "sequelize"
import {IappSettings} from "../types"
module.exports = (sequelize:any, DataTypes:any) => {
  class app_settings extends Model<IappSettings> implements IappSettings {
    createdAtSetting!: string
    updatedAtSetting!: string
    cod_setting!:number
    nam_setting!:string
    dat_setting!:string
    ins_setting!:boolean
    static associate (models:any) {
      // define association here
    }
  }
  app_settings.init( {
    cod_setting: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: "Código de rol",
    },
   
    nam_setting: {
      type: DataTypes.STRING(250),
      allowNull: false,
      comment: "Descripción de rol",
    },
    ins_setting: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
      comment: "Indicador de estado de rol",
    },
    dat_setting: {
      type: DataTypes.STRING(250),
      defaultValue: true,
      allowNull: false,
      comment: "Indicador de estado de rol",
    },
    createdAtSetting: {
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      type: DataTypes.DATE
    },
    updatedAtSetting: {
      defaultValue:sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'app_settings'
  })
  return app_settings
}