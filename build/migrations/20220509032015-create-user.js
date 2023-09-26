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
            yield queryInterface.createTable('pe_users', {
                cod_user: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    comment: "Código de usuario",
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate: {
                        notEmpty: true
                    },
                    comment: "Correo del usuario",
                },
                email_recovery: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate: {
                        notEmpty: true
                    },
                    comment: "Correo del usuario",
                },
                userName: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate: {
                        notEmpty: true
                    },
                    comment: "Nombre de usuario unico",
                },
                password: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate: {
                        notEmpty: true
                    },
                    comment: "Contraseña del usuario",
                },
                IND_INS: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                    validate: {
                        notEmpty: true
                    },
                    comment: "Indicador de primer ingreso",
                },
                IND_USR: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: true,
                    allowNull: false,
                    validate: {
                        notEmpty: true
                    },
                    comment: "Estado del usuario",
                },
            }, { timestamps: false });
        });
    },
    down(queryInterface) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable('pe_users');
        });
    }
};
