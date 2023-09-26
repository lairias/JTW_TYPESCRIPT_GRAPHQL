'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('pe_users', [
            {
                email: 'example@example.com',
                email_recovery: 'examplerecpvery@example.com',
                userName: 'user123',
                password: '123456',
            },
            {
                email: 'example@dfs.com',
                email_recovery: 'dfs@example.com',
                userName: 'user1asa23',
                password: '123456',
            },
            {
                email: 'sas@dfs.com',
                email_recovery: 'dfs@examasdple.com',
                userName: 'usersad1asa23',
                password: '123456',
            }
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('pe_users', null, {});
    }
};
