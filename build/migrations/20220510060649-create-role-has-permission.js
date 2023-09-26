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
            yield queryInterface.createTable('role_has_permissions', {
                cod_role: {
                    type: Sequelize.INTEGER,
                    comment: "Código de rol",
                    // references: {
                    //   model: {
                    //     tableName: 'role', // name of Target model
                    //   },
                    //   key: 'cod_role',  // key in Target model
                    // },
                    references: {
                        model: {
                            tableName: 'role',
                        },
                        key: 'cod_role'
                    },
                },
                cod_permission: {
                    type: Sequelize.INTEGER,
                    comment: "Código de permiso",
                    references: {
                        model: {
                            tableName: 'permissions', // name of Target model
                        },
                        key: 'cod_permission', // cod_permission
                    },
                },
            });
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable('role_has_permissions');
        });
    }
};
