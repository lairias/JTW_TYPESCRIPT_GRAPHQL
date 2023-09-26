'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('role_has_permissions', {
      cod_role: {
        type: Sequelize.INTEGER,
        comment: "Código de rol", 
        references: {
          model: {
            tableName: 'role',
          },
          key: 'cod_role'
        },
        
      },
      cod_permission: {
        type: Sequelize.INTEGER,
        comment: "Código de permiso",
        references: {
          model: {
            tableName: 'permissions', // name of Target model
          },
          key: 'cod_permission',  // cod_permission
        },
      },
    }, {timestamps:false});
  },
  async down(queryInterface, ) {
    await queryInterface.dropTable('role_has_permissions');
  }
};