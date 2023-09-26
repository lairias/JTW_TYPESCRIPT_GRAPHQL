'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('pe_people', [
            {
                cod_user: 1,
                firstName: 'Juan',
                middleName: 'Perez',
                lastName: 'Perez',
                photoProfile: "https://www.w3schools.com/howto/img_avatar.png",
                photoBackground: "https://www.w3schools.com/howto/img_avatar.png",
                gender: "W",
                age: 21,
                birthDate: "1998-07-07"
            },
            {
                cod_user: 2,
                firstName: 'Juasn',
                middleName: 'Persez',
                lastName: 'Persez',
                photoProfile: "https://www.w3schools.com/howto/img_avatar.png",
                photoBackground: "https://www.w3schools.com/howto/img_avatar.png",
                gender: "W",
                age: 21,
                birthDate: "1998-07-07"
            },
            {
                cod_user: 3,
                firstName: 'Juans',
                middleName: 'Perezs',
                lastName: 'Peraez',
                photoProfile: "https://www.w3schools.com/howto/img_avatar.png",
                photoBackground: "https://www.w3schools.com/howto/img_avatar.png",
                gender: "W",
                age: 21,
                birthDate: "1998-07-07"
            }
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('pe_people', null, {});
    }
};
