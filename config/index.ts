import { Sequelize } from 'sequelize';


const db = new Sequelize('SI-CarWash', 'CarWash', 'CarWash#$%895#', {
  host: '142.44.161.115',
  dialect: 'mysql',
  // logging: false,
});

export default db;
