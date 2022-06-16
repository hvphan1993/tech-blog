// const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
  {
    username: 'leonardo',
    password: 'password123'
  },
  {
    username: 'donatello',
    password: 'password123'
  },
  {
    username: 'raphael',
    password: 'password123'
  },
  {
    username: 'michelangelo',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;