'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('user_has_roles', [
            {
                cod_user: 1,
                cod_role: 1,
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('user_has_roles', null, {});
    }
};
