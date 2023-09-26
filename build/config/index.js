"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('SI-CarWash', 'CarWash', 'CarWash#$%895#', {
    host: '142.44.161.115',
    dialect: 'mysql',
    // logging: false,
});
exports.default = db;
