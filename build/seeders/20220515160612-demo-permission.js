'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('permissions', [
            {
                desc_permission: 'Permiso de ejemplo',
                nam_permission: 'permission.example',
            },
            {
                desc_permission: 'Permiso de ejemplo 2',
                nam_permission: 'permission.example2',
            }
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('permissions', null, {});
    }
};
