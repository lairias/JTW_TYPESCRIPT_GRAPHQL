'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sessions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      user_id: {
        type: Sequelize.INTEGER,
        comment: "Código de usuario",
        references: {
          model: {
            tableName: 'pe_users', // name of Target model
          },
          key: 'cod_user',  // key in Target model
        },
      },
      ip_address: {
        type: Sequelize.STRING,
        comment: "Dirección IP",
      },
      user_agent: {
        type: Sequelize.STRING,
        comment: "Navegador",
      },
      payload: {
        type: Sequelize.JSON,
        comment: "Datos de sesión",
      },
      expires_at: {
        type: Sequelize.DATE,
        comment: "Fecha de expiración",
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      last_activity: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      
      createdAtSession: {
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAtSession: {
        defaultValue:Sequelize.literal(" NULL ON UPDATE CURRENT_TIMESTAMP"),
        type: Sequelize.DATE
      }


    },{timestamps:false});
  },
  async down(queryInterface,Sequelize) {
    await queryInterface.dropTable('sessions');
  }
};