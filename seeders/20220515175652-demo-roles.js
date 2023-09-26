'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('role', [
      {
        desc_role: 'Rol de ejemplo',
        nam_role: 'Adminstrador',
      },
      {
        desc_role: 'Rol pulería',
        nam_role: 'Pulpería',
      },
      {
        desc_role: 'Rol cliente normar',
        nam_role: 'cliente',
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('role', null, {});
  }
};
