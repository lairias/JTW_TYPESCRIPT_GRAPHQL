'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('permissions', [
      {
        desc_permission: 'Permiso de administrador crear',
        nam_permission: 'administrador.crear',
      },
      {
        desc_permission: 'Permiso de administrador ver',
        nam_permission: 'administrador.ver',
      },
      {
        desc_permission: 'Permiso de administrador eliminar',
        nam_permission: 'administrador.eliminar',
      },
      {
        desc_permission: 'Permiso de administrador actualizar',
        nam_permission: 'administrador.actualizar',
      },
      {
        desc_permission: 'Permiso de Pulpería crear',
        nam_permission: 'Pulpería.crear',
      },
      {
        desc_permission: 'Permiso de Pulpería ver',
        nam_permission: 'Pulpería.ver',
      },
      {
        desc_permission: 'Permiso de Pulpería eliminar',
        nam_permission: 'Pulpería.eliminar',
      },
      {
        desc_permission: 'Permiso de Pulpería actualizar',
        nam_permission: 'Pulpería.actualizar',
      },
      {
        desc_permission: 'Permiso de Cliente crear',
        nam_permission: 'Cliente.crear',
      },
      {
        desc_permission: 'Permiso de Cliente ver',
        nam_permission: 'Cliente.ver',
      },
      {
        desc_permission: 'Permiso de Cliente eliminar',
        nam_permission: 'Cliente.eliminar',
      },
      {
        desc_permission: 'Permiso de Cliente actualizar',
        nam_permission: 'Cliente.actualizar',
      },
     
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('permissions', null, {});
  }
};
