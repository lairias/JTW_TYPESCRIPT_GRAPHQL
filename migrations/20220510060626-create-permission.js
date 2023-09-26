'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('permissions', {

      cod_permission: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "Código de permiso",
      },
      desc_permission: {
        type: Sequelize.STRING(250),
        allowNull: false,
        comment: "Descripción de permiso",
      },
      nam_permission: {
        allowNull: false,
        type: Sequelize.STRING(120),
        unique: true,
        comment: "Nombre de permiso",
      },
      createdAtPermission: {
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        type: Sequelize.DATE
      },
      updatedAtPermission: {
        defaultValue:Sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
        type: Sequelize.DATE
      }
    }, {timestamps:false});
  },
  async down(queryInterface, ) {
    await queryInterface.dropTable('permissions');
  }
};