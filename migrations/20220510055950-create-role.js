'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('role', {
      cod_role: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        Comment: "Código de rol",
      },
      desc_role: {
        type: Sequelize.STRING
      },
      nam_role: {
        allowNull: false,
        type: Sequelize.STRING(120),
        unique: true
      },
      createdAtRole: {
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAtRole: {
        defaultValue:Sequelize.literal("NULL ON UPDATE CURRENT_TIMESTAMP"),
        type: Sequelize.DATE
      }
    }, {timestamps: false});
  },
  async down(queryInterface, ) {
    await queryInterface.dropTable('role');
  }
};