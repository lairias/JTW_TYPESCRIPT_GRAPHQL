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
            yield queryInterface.createTable('sessions', {
                id: {
                    allowNull: false,
                    primaryKey: true,
                    type: Sequelize.UUID,
                    defaultValue: Sequelize.UUIDV4,
                },
                user_id: {
                    type: Sequelize.INTEGER,
                    comment: "Código de usuario",
                    references: {
                        model: {
                            tableName: 'pe_users', // name of Target model
                        },
                        key: 'cod_user', // key in Target model
                    },
                },
                ip_address: {
                    type: Sequelize.STRING,
                    comment: "Dirección IP",
                },
                user_agent: {
                    type: Sequelize.STRING,
                    comment: "Navegador",
                },
                payload: {
                    type: Sequelize.JSON,
                    comment: "Datos de sesión",
                },
                expires_at: {
                    type: Sequelize.DATE,
                    comment: "Fecha de expiración",
                },
                created_at: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.fn('now'),
                },
                last_activity: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.fn('now'),
                },
            });
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable('sessions');
        });
    }
};
