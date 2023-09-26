'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('role_has_permissions', [
      {
        cod_role: 1,
        cod_permission: 1,
      },
      {
        cod_role: 1,
        cod_permission: 2,
      },
      {
        cod_role: 2,
        cod_permission: 2,}
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('role_has_permissions', null, {});
  }
};
