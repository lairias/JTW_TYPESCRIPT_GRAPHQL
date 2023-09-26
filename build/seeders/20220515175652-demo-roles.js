'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('role', [
            {
                desc_role: 'Rol de ejemplo',
                nam_role: 'role.example',
            },
            {
                desc_role: 'Rol de ejemplo 2',
                nam_role: 'role.example2',
            }
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('role', null, {});
    }
};
