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
            yield queryInterface.createTable('user_has_roles', {
                cod_user: {
                    type: Sequelize.INTEGER,
                    comment: "Código de usuario",
                    references: {
                        model: {
                            tableName: 'pe_users', // name of Target model
                        },
                        key: 'cod_user', // key in Target model
                    },
                },
                cod_role: {
                    type: Sequelize.INTEGER,
                    comment: "Código de rol",
                    references: {
                        model: {
                            tableName: 'role', // name of Target model
                        },
                        key: 'cod_role', // key in Target model
                    },
                },
            });
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable('user_has_roles');
        });
    }
};
