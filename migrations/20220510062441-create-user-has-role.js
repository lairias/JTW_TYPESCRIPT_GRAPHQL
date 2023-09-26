'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_has_roles', {
      cod_user: {
        type: Sequelize.INTEGER,
        comment: "Código de usuario",
        references: {
          model: {
            tableName: 'pe_users', // name of Target model
          },
          key: 'cod_user',  // key in Target model
        },
      },
      cod_role: {
        type: Sequelize.INTEGER,
        comment: "Código de rol",
        references: {
          model: {
            tableName: 'role', // name of Target model
          },
          key: 'cod_role',  // key in Target model
        },
      },
    },{timestamps:false});
  },
  async down(queryInterface,Sequelize) {
    await queryInterface.dropTable('user_has_roles');
  }
};