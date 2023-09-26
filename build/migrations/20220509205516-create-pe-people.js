'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.createTable('pe_people', {
                cod_people: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    comment: "Código de persona",
                },
                cod_user: {
                    type: Sequelize.INTEGER,
                    comment: "Código de usuario",
                    allowNull: false,
                    references: {
                        model: {
                            tableName: 'pe_users',
                        },
                        key: 'cod_user'
                    },
                },
                firstName: {
                    type: Sequelize.STRING(120),
                    allowNull: false,
                    validate: {
                        notEmpty: true
                    },
                    comment: "Nombre del usuario",
                },
                middleName: {
                    type: Sequelize.STRING(120),
                    allowNull: false,
                    validate: {
                        notEmpty: true
                    },
                    comment: "Segundo nombre del usuario",
                },
                lastName: {
                    type: Sequelize.STRING(120),
                    allowNull: false,
                    validate: {
                        notEmpty: true
                    },
                    comment: "Apellido del usuario",
                },
                photoProfile: {
                    type: Sequelize.STRING(250),
                    allowNull: false,
                    validate: {
                        notEmpty: true
                    },
                    comment: "Foto de perfil del usuario",
                },
                photoBackground: {
                    type: Sequelize.STRING(250),
                    allowNull: false,
                    validate: {
                        notEmpty: true
                    },
                    comment: "Foto de fondo del usuario",
                },
                gender: {
                    type: Sequelize.ENUM("W", "M"),
                    allowNull: false,
                    comment: "tipo de genero del usuario"
                },
                age: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    comment: "Edad del usuario",
                },
                birthDate: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    comment: "Fecha de nacimiento del usuario",
                },
            }, { timestamps: false });
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable('pe_people');
        });
    }
};
