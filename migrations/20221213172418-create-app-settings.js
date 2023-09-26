'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('app_settings', {
      cod_setting: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "Código de rol",
      },
   
      nam_setting: {
        type: Sequelize.STRING(250),
        allowNull: false,
        comment: "Descripción de rol",
      },
      ins_setting: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
        comment: "Indicador de estado de rol",
      },
      dat_setting: {
        type: Sequelize.STRING(250),
        defaultValue: true,
        allowNull: false,
        comment: "Indicador de estado de rol",
      },
      createdAtSetting: {
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        type: Sequelize.DATE
      },
      updatedAtSetting: {
        defaultValue:Sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
        type: Sequelize.DATE
      }
    },{timestamps:false});
  },
  async down(queryInterface,Sequelize) {
    await queryInterface.dropTable('app_settings');
  }
};
